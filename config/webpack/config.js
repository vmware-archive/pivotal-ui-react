var path = require('path');

module.exports = function(env = null) {
  return Object.assign({}, {
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    output: {
      library: 'pivotal-ui-react.[name]',
      libraryTarget:  'umd',
      path: path.resolve(__dirname, '..', '..', 'dist'),
      filename: '[name]/[name].js',
      chunkFilename: '[name]/[name].js',
      pathinfo: true
    },
    externals: {
      react: true
    }
  }, env && require(`./${env}`));
};
