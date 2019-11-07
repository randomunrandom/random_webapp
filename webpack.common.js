const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

 const common_config = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/[name].[hash:8].js',
    publicPath: '/'
  },
  context: __dirname,
  resolve: {
    extensions: [ '.vue', '.js', '.ts', '.json', '.json5', '.yaml' ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname),
      // 'locales': path.resolve(__dirname, 'src', 'locales'),
      // 'components': path.resolve(__dirname, 'src', 'components'),
      'pages': path.resolve(__dirname, 'src', 'pages'),
      // 'middleware': path.resolve(__dirname, 'src', 'middleware')
    },
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          // 'cache-loader',
          'vue-loader'
        ]
      }, {
        test: /\.tsx?$/,
        use: [
          {
            // loader: "thread-loader",
            // options: {
              // workers: 2,
            // }
          // }, {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
      }, {
        test: /\.js$/,
        use: [
          // {
            // loader: "thread-loader",
            // options: {
              // workers: 2,
              // workerParallelJobs: 2
            // }
          //},
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
              // cacheDirectory: false
            }
          }
        ]
      }, {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /vue/,
            use: [ 'pug-plain-loader' ]
          }, {
            use: [ 'html-loader', 'pug-plain-loader' ]
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => {
                require('postcss-preset-env')({
                  stage: 1,
                  autoprefixer: true
                })
              }
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => {
                require('postcss-preset-env')({
                  stage: 1
                })
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin([
      { from: 'static', to: '.' },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.pug'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css',
      chunkFilename: 'style/[name]:[id].[contenthash:8].css'
    }),
    new ProgressBarPlugin({
      format: 'progress: [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      summary: false
    })
  ]
}

module.exports = common_config
