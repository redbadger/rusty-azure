import webpack from 'webpack';
import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import baseConfig from './webpack.config.base';

const config: webpack.Configuration = {
  ...baseConfig,
  mode: 'production',
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, '../build'),
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin({})],
  },
};

export default config;
