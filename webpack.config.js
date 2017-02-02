const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath : '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          'standard-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],

  context: path.resolve(__dirname, 'src'),

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    hot: true,
    open: true
  }
}
