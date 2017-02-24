var path = require('path')
var webpack = require('webpack')

module.exports = () => ({
  target: 'web',
  devtool: 'source-map',
  entry: {
    entry: ['babel-polyfill', './app']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: '/public/js'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
})
