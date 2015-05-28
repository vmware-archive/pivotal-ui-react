var fs = require('fs');
var highland = require('highland');
var gulp = require('gulp');
var mkdirp = require('mkdirp');
var packageTemplate = require('../templates/package.json');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var through = require('through2');
var File = require('vinyl');
var {componentDocs} = require('../helpers/documentation_helper');
const COPYRIGHT = '/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/\n';

gulp.task('watch', function() {
  gulp.watch('components/**/*.js', ['assets-javascript']);
  gulp.watch('components/**/*.json', ['assets-package-json']);
  gulp.watch('components/**/*.md', ['assets-readme']);
});

gulp.task('assets-javascript', function() {
  return gulp.src('components/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.babel({stage: 0}))
    .pipe(plugins.header(COPYRIGHT))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-package-json', function(){
  return gulp.src('components/*')
    .pipe(plugins.plumber())
    .pipe(through.obj(function(folder, encoding, callback) {
      var name = path.basename(folder.path);
      var outputDir = path.resolve(__dirname, '..', 'dist', name);
      var jsonContents = {};
      try {
        jsonContents = JSON.parse(fs.readFileSync(path.resolve(folder.path, 'package.json'), 'utf8'));
      } catch(e) {}

      fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageTemplate(
        {
          name: `pui-react-${name}`,
          description: `${name}`,
          main: `${name}.js`
        },
        jsonContents
      ));

      callback();
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-license', function(){
  return gulp.src('components/*')
    .pipe(plugins.plumber())
    .pipe(through.obj(function(folder, encoding, callback) {
      var name = path.basename(folder.path);
      var outputLicense = path.resolve(__dirname, '..', 'dist', name, 'LICENSE');
      var licenseFile = path.resolve(__dirname, '..', 'LICENSE');
      fs.writeFileSync(outputLicense, fs.readFileSync(licenseFile, 'utf8'));

      callback();
    }));
});

const GITHUB = 'https://github.com/pivotal-cf/pivotal-ui-react';
const NPM = 'https://www.npmjs.com/browse/keyword/pivotal%20ui%20modularized';

function readme(file) {
  var packageJson = require(path.join(path.dirname(file.path), 'package.json'));
  return [
    `# pui-react-${path.basename(file.path, '.js')}`,
    packageJson.description || '',
    `Pivotal UI React ([GitHub](${GITHUB}), [npm](${NPM})) is a collection of [React](https://facebook.github.io/react/) components for rapidly building and prototyping UIs.`,
    `This component requires React v0.13`,
    `See the [Pivotal UI Styleguide](${packageJson.homepage}) for fully rendered examples.`,
    componentDocs(file),
     `*****************************************\n\n(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.\n`
  ].join('\n\n');
}

gulp.task('assets-readme', function() {
  return highland(gulp.src('components/*'))
    .flatMap(dir => highland(
      gulp.src(path.join(dir.path, '*.js'))
        .pipe(plugins.concat(path.basename(dir.path)))
    ))
    .map(file =>
      Object.assign(file, {
        base: path.dirname(file.base),
        contents: new Buffer(readme(file)),
        path: path.join(path.dirname(file.path), 'README.md')
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-packaging', ['assets-package-json', 'assets-readme', 'assets-license']);

gulp.task('build', function() {
  runSequence('assets-javascript', 'assets-packaging');
});

gulp.task('assets', function() {
  runSequence('assets-javascript', 'assets-packaging', 'watch');
});
