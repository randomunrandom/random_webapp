const path = require('path');
const merge = require('webpack-merge');
const common_config = require('./webpack.common');

const dev_config = merge.smart(common_config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    writeToDisk: true,
    overlay: true,
    https: false
  },
  plugins: [
  ]
});

module.exports = dev_config
