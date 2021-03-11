import webpack from 'webpack';
import path from 'path';

import baseConfig from './webpack.config.base';

const plugins = baseConfig.plugins?.concat(
  new webpack.HotModuleReplacementPlugin(),
);

const config: webpack.Configuration = {
  ...baseConfig,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    stats: 'errors-only',
  },
  mode: 'development',
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, '../dist'),
  },
  plugins,
};

export default config;
