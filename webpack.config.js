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
          // Note that you could also configure presets and plugins this .babelrc
          presets: ['es2015', 'react', 'stage-0'],
          plugins: [[
            'react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }
          ]]
        }
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
