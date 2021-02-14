// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  output: {
	path: `${__dirname}/dist`,
	filename: 'bundle.js',
    },
    // plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
      ]
  },
};