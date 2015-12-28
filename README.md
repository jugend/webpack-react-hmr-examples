# Webpack React Hot Module Replacement (HMR) Examples

Sample Webpack React HMR setup with Babel 6.

Three examples shown:
- with Babel's [react-transform plugin](https://github.com/gaearon/babel-plugin-react-transform)
- with Babel's [react-transform preset](https://github.com/danmartinez101/babel-preset-react-hmre)
- with Express webpack middlewares

## Hot Module Replacement with Transforms

- https://github.com/gaearon/babel-plugin-react-transform

```js
// Webpack config
module.exports = {
  entry: '...',
  output: { ... },
  module: {
    loaders: [
      {
        test: /\.js?|\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
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
  }
}
```


```sh
// Start webpack dev server
// http://localhost:8080
npm run webpack-dev
```

## Hot Module Replacement with Transform Preset

- https://github.com/danmartinez101/babel-preset-react-hmre

```js
// Webpack config
module.exports = {
  entry: '...',
  output: { ... },
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
  }
}
```

```sh
# Start webpack dev server with preset config
# http://localhost:8080
npm run webpack-dev-preset
```

## Hot Module Replacement with Express Middlewares

- https://github.com/webpack/webpack-dev-middleware
- https://github.com/glenjamin/webpack-hot-middleware

```js
module.exports = {
  entry: [ ... ],
  output: { ... },
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
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      }
    ]
  }
}
```

```sh
# Start express server with webpack middlewares
# http://localhost:3000
npm run express
```
