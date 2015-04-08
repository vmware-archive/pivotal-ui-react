var fs = require('fs');
var gulp = require('gulp');
var mkdirp = require('mkdirp');
var packageTemplate = require('../templates/package.json');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var through = require('through2');
const COPYRIGHT = '/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/\n';

gulp.task('watch', function() {
  gulp.watch('components/**/*.js', ['assets-javascript']);
  gulp.watch('components/**/*.json', ['assets-package-json']);
  gulp.watch('components/**/*.md', ['assets-readme']);
});

gulp.task('assets-javascript', function() {
  return gulp.src('components/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.babel({optional: ['es7.objectRestSpread']}))
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

const README_FOOTER = `
*****************************************

This is a component of Pivotal UI React.

[Styleguide](http://styleguide.pivotal.io/react_beta.html)
[Github](https://github.com/pivotal-cf/pivotal-ui-react)

All Pivotal UI Components require ReactJS (0.12.x)

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.
`;
gulp.task('assets-readme', function(){
  return gulp.src('components/**/*.md')
    .pipe(plugins.plumber())
    .pipe(plugins.footer(README_FOOTER))
    .pipe(gulp.dest('dist'));
});

gulp.task('assets-packaging', ['assets-package-json', 'assets-readme', 'assets-license']);

gulp.task('build', function() {
  runSequence('assets-javascript', 'assets-packaging');
});

gulp.task('assets', function() {
  runSequence('assets-javascript', 'assets-packaging', 'watch');
});
