const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : '',
  entry: ['./app', 'bootstrap/dist/css/bootstrap.min.css'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist/public'),
    filename: 'assets/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
    new CopyWebpackPlugin([
      { from: 'assets/static' },
    ]),
  ],
};
