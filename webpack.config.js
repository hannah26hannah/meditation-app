// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  output: {
	path: `${__dirname}/dist`,
	filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true
        }
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)?$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(ogg|mp3|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(ogg|mp4|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attrs: [":src"]
                }
            },
            {
                test: /\.(mov|mp4)$/,
                loader: 'url-loader'
            },
      ]
  },
};