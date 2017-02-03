import {resolve} from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    main: './index.js'
  },

  output: {
    path: resolve(__dirname, 'build'),
    publicPath: '/',
    filename: PROD ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: PROD ? '[name].[chunkhash].js' : '[name].js'
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
        use: (PROD ? [] : [
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin({
      filename: PROD ? '[name].[chunkhash].css' : '[name].css',
      allChunks: true,
      disable: !PROD
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.SourceMapDevToolPlugin({
      exclude: 'manifest'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.ejs',
      minify: { collapseWhitespace: true },
      title: 'Single Page App React',
      description: 'Single page app with React',
      publicPath: '/'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['manifest']
    }),
    new CopyWebpackPlugin([
      { from: './assets/**/*', to: './' },
      { from: './manifest.json', to: './' }
    ])
  ]).concat(PROD ? [
    new CleanWebpackPlugin('./build/*'),
    new WebpackMd5Hash(),
    new webpack.HashedModuleIdsPlugin(),
    new OfflinePlugin({
      relativePaths: false,
      AppCache: false,
      ServiceWorker: {
        events: true
      }
    })
  ] : [
    new webpack.NamedModulesPlugin()
  ])
}
