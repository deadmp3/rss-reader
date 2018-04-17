import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  mode: process.env.NODE_ENV,
  entry: {
    vendors: ['babel-polyfill', 'nodelist-foreach-polyfill', 'jquery', 'popper.js', 'bootstrap'],
    client: './src/frontend/client',
    index: './index',
  },
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : '',
  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, '../..', 'assets'),
    filename: '[name].js',
    library: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'vendors',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});