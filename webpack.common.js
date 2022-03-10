const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {

    app: path.join(__dirname, "src", "index.tsx"),

  },


  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

};