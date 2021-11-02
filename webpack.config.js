const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode:  "development",
  entry: "C:/Masha/frontend/booking-system/src/cards/card-for-entry/card-for-entry.pug",
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'

  },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      module: {
        rules: [
          {
            test: /\.pug$/,
            use: [
              {
                loader: 'simple-pug-loader'
              }
            ]
          }
        ]
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin()
      ]
};

 