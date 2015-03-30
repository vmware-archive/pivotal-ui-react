var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var spawn = require('child_process').spawn;
var path = require('path');



gulp.task('publish', function(done){
  if(!argv.component) {
    console.log('Usage: gulp publish --component=componentName');
    console.log('You must be logged in to npm');
    done();
    return;
  }
  console.log('Publishing', argv.component);
  var packageDir = path.resolve(__dirname, '..', 'dist', argv.component);
  spawn('npm', ['publish'], { cwd: packageDir, stdio: 'inherit' }).on('close', done);
});