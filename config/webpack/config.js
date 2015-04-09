var path = require('path');

module.exports = function(env = null) {
  return Object.assign({}, {
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=es7.objectRestSpread'}
      ]
    },
    externals: {
      react: true
    }
  }, env && require(`./${env}`));
};
