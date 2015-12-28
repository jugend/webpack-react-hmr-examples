var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.express.js');
var webpackCompiler = webpack(webpackConfig);

// Webpack middlewares
var webpackDev = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');

app.use(webpackDev(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(webpackCompiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server
app.listen(app.get('port'), 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
