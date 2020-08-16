const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

const common_config = {
  entry: {
    main: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script/[name].[hash:8].js",
    publicPath: "/"
  },
  context: __dirname,
  resolve: {
    extensions: [".pug", ".js", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname),
    }
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
    //   {
        // test: /\.js$/,
        // loader: "babel-loader",
        // options: {
        //   cacheDirectory: true
        // },
        // exclude: /node_modules/,
    //   },
      {
        test: /\.pug$/,
        use: [
            "html-loader",
            "pug-plain-loader"
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require('tailwindcss'),
                require("postcss-preset-env")({
                  stage: 1
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers")
              }
            }
          }
        ]
      },
      {
        test: /\.yaml$/,
        exclude: /node_modules/,
        use: ["json5-loader", "yaml-loader"]
      },
      {
        test: /\.json5?$/,
        loader: "json5-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.pug")
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:8].css",
      chunkFilename: "style/[name]:[id].[contenthash:8].css"
    }),
    new ProgressBarPlugin({
      format:
        "progress: [:bar] " +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
      summary: false
    }),
  ]
};

module.exports = common_config;