var packageTemplate = function(...overrides) {
  return JSON.stringify(Object.assign({
    name: 'pui-react-COMPONENT',
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
    author: 'Pivotal Software, Inc',
    license: 'MIT',
    bugs: {
      url: "https://github.com/pivotal-cf/pivotal-ui-react/issues"
    },
    homepage: "https://github.com/pivotal-cf/pivotal-ui-react"
  }, ...overrides), null, 2);
};

module.exports = packageTemplate;
