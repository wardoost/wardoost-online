const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    main: (ENV === 'production' ? [] : [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]).concat('./index.js')
  },

  output: {
    path: resolve(__dirname, 'build'),
    publicPath : '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['standard-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
    ],
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: ENV !== 'production'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, 'public/index.html')
    }),
  ]).concat(ENV === 'production' ? [] : [
    new webpack.HotModuleReplacementPlugin()
  ]),

  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules']
  },

  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/',
    hot: true,
    open: true
  }
}
