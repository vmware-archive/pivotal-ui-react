var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
gulp.task('spec', callback => runSequence('lint', 'jasmine-ci', callback));

function testAssets(options = {}) {
  var webpackConfig = Object.assign(require('../config/webpack/config')('test'), options);
  return gulp.src('spec/components/**/*_spec.js')
    .pipe(plugins.plumber())
    .pipe(plugins.webpack(webpackConfig));
}

gulp.task('jasmine-ci', function() {
  return testAssets({watch: false})
    .pipe(plugins.jasmineBrowser.specRunner({console: true}))
    .pipe(plugins.jasmineBrowser.phantomjs());
});

gulp.task('jasmine', function() {
  return testAssets()
    .pipe(plugins.jasmineBrowser.specRunner())
    .pipe(plugins.jasmineBrowser.server());
});
