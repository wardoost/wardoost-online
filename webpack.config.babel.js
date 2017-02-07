import {resolve} from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import OfflinePlugin from 'offline-plugin'

const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: {
    vendor: [
      'babel-polyfill',
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
          'react-hot-loader/webpack'
        ]).concat([
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
                importModules: true,
                localIdentName: PROD ? '[hash:8]' : '[local]-[hash:8]',
                sourceMap: !PROD
              }
            },
            { loader: 'postcss-loader' },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !PROD
              }
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
            name: `[path][name]${PROD ? '-[hash:base64:5]' : ''}.[ext]`,
            limit: 8192
          }
        }
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
      { from: './assets/icons/**/*', to: './' },
      { from: './manifest.json', to: './' },
      { from: './_redirects', to: './' }
    ])
  ]).concat(PROD ? [
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
  ] : [
    new webpack.NamedModulesPlugin()
  ])
}
