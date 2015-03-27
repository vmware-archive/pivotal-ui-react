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
  gulp.watch('src/**/*.js', ['assets-javascript'])
});

gulp.task('assets-javascript', function() {
  return gulp.src('src/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.babel({optional: ['es7.objectRestSpread']}))
    .pipe(plugins.header(COPYRIGHT))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['assets-javascript'], function() {
  return gulp.src('src/*/')
    .pipe(through.obj(function(file, encoding, callback) {
      var name = path.basename(file.path);
      var outputDir = path.resolve(__dirname, '..', 'dist', name);
      mkdirp.sync(outputDir);

      var jsonContents = {};
      try {
        jsonContents = JSON.parse(fs.readFileSync(path.resolve(file.path, 'package.json'), 'utf8'));
      } catch(e) {}

      fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageTemplate(
        {
          name: `pivotal-ui-react.${name}`,
          description: `${name}`,
          main: `${name}.js`
        },
        jsonContents
      ));

      callback();
    }));
});

gulp.task('assets', function() {
  runSequence('assets-javascript', 'watch');
});
