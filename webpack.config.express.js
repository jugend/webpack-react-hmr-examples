var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'eventsource-polyfill',           // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/app.js'
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js?|\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
