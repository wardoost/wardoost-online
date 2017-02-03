import {resolve} from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    main: './index.js'
  },

  output: {
    path: resolve(__dirname, 'build'),
    publicPath: '/',
    filename: `[name]${ENV === 'production' ? '.[hash:8]' : ''}.js`,
    chunkFilename: `[name]${ENV === 'production' ? '.[chunkhash:8]' : ''}.js`
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: (ENV === 'production' ? [] : [
          'react-hot-loader'
        ]).concat([
          'babel-loader'
        ]),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?modules',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: `[name]${ENV === 'production' ? '.[chunkhash:8]' : ''}.css`,
      allChunks: true,
      disable: ENV !== 'production'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.ejs',
      minify: { collapseWhitespace: true },
      title: 'SPA React',
      description: 'Single page app with React',
      publicPath: '/'
    }),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' },
      { from: './manifest.json', to: './' }
    ])
  ]).concat(ENV === 'production' ? [
    new CleanWebpackPlugin('./build/*'),
    new WebpackMd5Hash(),
    new OfflinePlugin({
      relativePaths: false,
      AppCache: false,
      ServiceWorker: {
        events: true
      }
    })
  ] : [
    new webpack.NamedModulesPlugin()
  ]),

  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map'
}
