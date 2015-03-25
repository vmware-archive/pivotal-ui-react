var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
const COPYRIGHT = '/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/\n';

var isProduction = () => process.env.NODE_ENV === 'production';

gulp.task('assets-javascript', function() {
  var webpackConfig = Object.assign({}, require('../config/webpack/config')(process.env.NODE_ENV));
  var config = require('../server/config');
  return gulp.src('app/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.webpack(webpackConfig))
    .pipe(plugins.header(COPYRIGHT))
    .pipe(gulp.dest('public'))
    .pipe(plugins.cond(isProduction(), () => gulp.dest('public')));
});

gulp.task('assets', function() {
  runSequence('assets-javascript');
});
