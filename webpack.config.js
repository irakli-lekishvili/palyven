var path = require('path')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')

module.exports = () => ({
  target: 'web',
  // devtool: 'source-map',
  entry: {
    entry: './app'
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
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
})
