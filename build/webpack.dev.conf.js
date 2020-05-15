const merge = require ('webpack-merge');
const webpack = require ('webpack');
const path = require ('path');
const baseConfig = require ('./webpack.base.conf');
const HtmlWepackPlugin = require ('html-webpack-plugin');
const portfinder = require ('portfinder');
const FriendlyErrorsPlugin = require ('friendly-errors-plugin');

const devenv = require ('../config/dev.env');
const utils = require ('./utils');
const config = require ('../config');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number (process.env.PORT);

process.env.NODE_ENV = 'development';

const devWebpackConfig = merge (baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: utils.styleLoaders ({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true,
    }),
  },
  devServer: {
    clientLogLevel: 'warning',
    contentBase: path.resolve (__dirname, '../dist'),
    open: config.dev.autoOpenBrowser,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join (config.dev.assetsPublicPath, 'index.html'),
        },
      ],
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: config.dev.poll,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin (),
    new HtmlWepackPlugin ({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    // new webpack.DefinePlugin ({
    //   'process.env.NODE_ENV': devenv,
    // }),
  ],
  optimization: {
    namedModules: true,
  },
});
module.exports = new Promise ((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort ((err, port) => {
    if (err) {
      reject (err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push (
        new FriendlyErrorsPlugin ({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
            ],
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback ()
            : undefined,
        })
      );

      resolve (devWebpackConfig);
    }
  });
});
