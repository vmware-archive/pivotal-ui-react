var uniq = require('lodash.uniq');

module.exports = function(dependencyTree, filterRegEx) {
  var result = [];
  var queue = [dependencyTree];
  var node;
  while (queue.length) {
    node = queue.pop();
    result.unshift(node);
    Object.keys(node.dependencies).forEach(function(packageName) {
      queue.push(node.dependencies[packageName]);
    });
  }
  return uniq(
    result
      .slice(1, -1)
      .filter(function(packageJson) {
        return !filterRegEx || filterRegEx.test(packageJson.name);
      }),
    function(packageJson) {
      return packageJson.name;
    }
  );
};