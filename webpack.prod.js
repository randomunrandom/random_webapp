const path = require('path');
const merge = require('webpack-merge');
const common_config = require('./webpack.common');
const OptimizeCSS = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExt = require('script-ext-html-webpack-plugin');

const prod_config = merge.smart(common_config, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSS()],
    usedExports: true
  },
  plugins: [
    new OptimizeCSS(),
    // new ScriptExt({
      // defaultAttribute: 'async',
      // prefetch: '*'
    // })
  ]
});

module.exports = prod_config
