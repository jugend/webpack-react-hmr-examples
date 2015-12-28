var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.js?|\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0', 'react-hmre']
        }
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
