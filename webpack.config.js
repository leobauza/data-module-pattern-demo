const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './web',
    hot: true,
  },
  entry: {
    app: './src/js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.m?(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'web'),
  },
}
