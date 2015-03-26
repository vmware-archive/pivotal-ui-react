var fs = require('fs');
var glob = require('glob');
var gulp = require('gulp');
var mkdirp = require('mkdirp');
var packageTemplate = require('../templates/package.json');
var path = require('path');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var through = require('through2');
const COPYRIGHT = '/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/\n';

var buildJavaScripts = function(options) {
  var webpackConfig = Object.assign({}, require('../config/webpack/config')(process.env.NODE_ENV), options);
  var javascripts = glob.sync('./src/components/**/*.js');
  var entries = javascripts.reduce(function(memo, filename) {
    var name = path.basename(filename, '.js');
    memo[name] = filename;
    return memo;
  }, {});
  webpackConfig.entry = entries;
  return gulp.src('src/components/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.webpack(webpackConfig))
    .pipe(plugins.header(COPYRIGHT))
    .pipe(gulp.dest('dist'));
};

var createPackaging = function() {
  return through.obj(function(file, encoding, callback) {
    var name = path.basename(file.path, '.js');
    var outputDir = path.resolve(__dirname, '..', 'dist', name);
    mkdirp.sync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageTemplate(name));
    callback();
  });
};

gulp.task('assets-javascript', function() {
  return buildJavaScripts();
});

gulp.task('build', function() {
  buildJavaScripts({watch: false});
  return gulp.src('src/components/**/*.js')
    .pipe(createPackaging())
});

gulp.task('assets', function() {
  runSequence('assets-javascript');
});
