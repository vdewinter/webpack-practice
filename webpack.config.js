// const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] } // or "style!css"
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Webpack 2',
    //   filename: 'index.html',
    //   template: './templates/temp.html'
    // }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};