const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
module.exports = merge(common,{
 mode: 'development', 
  output: {

    filename: '[name].bundle.[hash].js',

    path: path.resolve(__dirname, 'dist'),

    clean: true,

  },
  optimization: {

    splitChunks: {

      chunks: 'all',

    },

  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"), 
      title: 'Welcome To React Buat Sendiri',
    }),
    new CleanWebpackPlugin(),
  ],
})