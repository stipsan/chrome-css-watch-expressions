var path = require('path');

module.exports = {
  cache: true,
  entry: './src/app/panel.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'panel.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!less' },
      { test: /\.js$/, loader: 'jsx' }
    ]
  },
  plugins: []
};
