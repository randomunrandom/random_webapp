import path from 'path';
import merge from 'webpack-merge';
import common_config from './webpack.common';
import { default as OptimizeCSS } from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { default as ScriptExt } from 'script-ext-html-webpack-plugin';

const prod_config = merge.smart(common_config, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSS()],
    usedExports: true
  },
  plugins: [
    new OptimizeCSS(),
    new ScriptExt({
      defaultAttribute: 'async',
      prefetch: '*'
    })
  ]
});

module.exports = prod_config