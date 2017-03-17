const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

// Load environment variables from .env file. Surpress warnings using silent if file is missing.
require('dotenv').config({silent: true})

// Convenient bool to check environment
const DEV = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom'
    ],
    main: './index.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: DEV ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: DEV ? '[name].js' : '[name].[chunkhash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
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
        use: (DEV ? [
          'react-hot-loader/webpack'
        ] : []).concat([
          'babel-loader'
        ]),
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: DEV ? '[local]-[hash:8]' : '[hash:base64]'
              }
            },
            { loader: 'postcss-loader' },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(xml|html|txt|md)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: `[path][name]${DEV ? '' : '-[hash:base64:5]'}.[ext]`,
            limit: 8192
          }
        }
      }
    ]
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.GOOGLE_ANALYTICS_TRACKING_ID': JSON.stringify(process.env.GOOGLE_ANALYTICS_TRACKING_ID)
    }),
    new ExtractTextPlugin({
      filename: DEV ? '[name].css' : '[name].[hash].css',
      allChunks: true,
      disable: DEV
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
      title: 'Ward Oosterlijnck',
      description: 'Online ego boost of Ward Oosterlijnck',
      publicPath: '/'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['manifest']
    }),
    new CopyWebpackPlugin([
      { from: './assets/icons/**/*', to: './' },
      { from: './manifest.json', to: './' },
      { from: './_redirects', to: './' }
    ])
  ]).concat(DEV ? [
    new webpack.NamedModulesPlugin()
  ] : [
    new CleanWebpackPlugin('./build/*'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new WebpackMd5Hash(),
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new OfflinePlugin({
      relativePaths: false,
      excludes: ['**/.*', '**/*.map', '_redirects'],
      AppCache: false,
      ServiceWorker: {
        events: true
      }
    })
  ]),

  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  }
}
