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
    author: 'Pivotal Software, Inc',
    maintainers: [
      {
        name: "charleshansen",
        email: "chansen87@gmail.com"
      },
      {
        name: "stubbornella",
        email: "nicole@stubbornella.org"
      },
      {
        name: "ial-ahmed",
        email: "issaq_al-ahmed@outlook.com"
      },
      {
        name: "rdy",
        email: "ryan.dy@gmail.com"
      },
      {
        name: "vinsonchuong",
        email: "vinsonchuong@gmail.com"
      }
    ],
    license: 'MIT',
    bugs: {
      url: "https://github.com/pivotal-cf/pivotal-ui-react/issues"
    },
    homepage: "https://github.com/pivotal-cf/pivotal-ui-react"
  }, ...overrides), null, 2);
};

module.exports = packageTemplate;
