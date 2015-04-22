var fs = require('fs');
var path = require('path');
var npm = require('npm');
var listDeps = require('./list_dependencies');

module.exports = function(callback) {
  npm.load({}, function() {
    npm.commands.ls([], true, function(error, packageTree) {
      var packages = listDeps(packageTree, /.*/);
      var cssFiles = [];
      var processedCount = 0;
      packages.forEach(function(packageJson, i) {
        if (packageJson.style) {
          console.error('resolving', packageJson.name);
          fs.readFile(path.resolve(packageJson.path, packageJson.style), {encoding: 'utf8'}, function(error, data) {
            processedCount += 1;
            if (!error) cssFiles[i] = data;
            if (processedCount === packages.length) callback(cssFiles.filter(Boolean).join('\n'));
          });
        }
      });
    });
  });
};
