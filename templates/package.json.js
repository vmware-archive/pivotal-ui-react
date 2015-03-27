var packageTemplate = function(...overrides) {
  return JSON.stringify(Object.assign({
    name: 'pivotal-ui-react.COMPONENT',
    version: '0.0.1',
    description: '',
    main: 'COMPONENT.js',
    repository: {
      type: 'git',
      url: 'https://github.com/pivotal-cf/pivotal-ui-react.git'
    },
    keywords: [
      'bootstrap',
      'react',
      'pivotal ui',
      'pivotal ui modularized'
    ],
    author: 'Pivotal',
    license: 'MIT',
    peerDependencies: {
      react: '0.12'
    }
  }, ...overrides), null, 2);
};

module.exports = packageTemplate;
