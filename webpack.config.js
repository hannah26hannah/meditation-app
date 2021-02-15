const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: './src/js/app.js',
  mode: 'none',
  output: {
	path: path.resolve(`${__dirname}/dist`),
	filename: 'bundle.js',
    },
  module: {
        rules: [
          {
            test: /\.css$/,
            exclude: "/node_modules",
            use: [
                { loader: MiniCssExtractPlugin.loader },
                'css-loader'
            ]
          },
          {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loader: 'file-loader',
              options: {
                  name: '/svg/[name].[ext]'
              }
          },
          {
              test: /\.(mp3)$/i,
              loader: 'file-loader',
              options: {
                  name: '/sounds/[name].[ext]'
              }
          },
          {
              test: /\.(mp4)$/i,
              loader: 'file-loader',
              options: {
                  name: '/video/[name].[ext]'
              }
          },
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 9000
  },
  plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        })
   ],
   resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
   } 
};