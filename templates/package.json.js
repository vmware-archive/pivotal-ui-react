var packageTemplate = function(name) {
  return `{
  "name": "pivotal-ui-react.${name}",
  "version": "0.0.1",
  "description": "${name}",
  "main": "${name}.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/pivotal-cf/pivotal-ui-react.git"
  },
  "keywords": [
    "bootstrap",
    "react",
    "pivotal ui",
    "pivotal ui modularized"
  ],
  "author": "Pivotal",
  "license": "MIT",
  "peerDependencies": {
    "react": "0.12"
  },
  "dependencies": {
    "react-bootstrap": "0.13.3"
  }
}`
};
module.exports = packageTemplate;
