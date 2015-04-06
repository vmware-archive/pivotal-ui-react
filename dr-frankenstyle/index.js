var fs = require('fs');
var path = require('path');
var npm = require('npm');
var listDeps = require('./list_dependencies');

module.exports = function(callback) {
  npm.load({}, function() {
    npm.commands.ls([], true, function(error, packageTree) {
      var packages = listDeps(packageTree, /.*/);
      var css = packages.map(function(packageJson) {
        if (packageJson.style) console.error('resolving', packageJson.name);
        return packageJson.style ?
          fs.readFileSync(path.resolve(packageJson.path, packageJson.style), 'utf8') :
          '';
      })
        .filter(Boolean)
        .join('\n');
      callback(css);
    });
  });
};
