const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode:  "development",
  entry: ["/src/form-elements/__button/button.pug"],
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
            test: /\.(s(a|c)ss)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
         }        
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:'src/form-elements/__button/button.pug'
      }),
      new MiniCssExtractPlugin()
    ]
};

 