const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
 mode: 'production', 
  output: {

    filename: '[name].bundle.[hash].js',

    path: path.resolve(__dirname, 'dist'),

    clean: true,

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/prod", "index.html"), 
      title: 'Welcome To React Buat Sendiri',
      inject: false,

    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
})