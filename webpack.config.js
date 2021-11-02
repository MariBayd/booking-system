const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode:  "development",
  entry: "/src/cards/card-for-entry/card-for-entry.pug",
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
          },
          {
            test: /\.pug$/,
            use: [
              {
                loader: 'simple-pug-loader',
                options:{
                  pretty: true
                }
              }
            ],
          },
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
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:'src/cards/card-for-entry/card-for-entry.pug'
      })
    ]
};

 