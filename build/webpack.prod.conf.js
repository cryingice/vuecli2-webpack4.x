const merge = require ('webpack-merge');
const path = require ('path');
const baseConfig = require ('./webpack.base.conf');

const webpack = require ('webpack');

const {CleanWebpackPlugin} = require ('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWepackPlugin = require ('html-webpack-plugin');

// const env = require ('../config/prod.env');
process.env.NODE_ENV = 'production';
const config = require ('../config');

module.exports = merge (baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  // devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: config.build.assetsPublicPath,
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.styl(us)?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.scss?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin ({}),
    new MiniCssExtractPlugin ({
      filename: 'assets/css/[name].[hash:7].css',
    }),
    new HtmlWepackPlugin ({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    // new webpack.DefinePlugin ({
    //   'process.env.NODE_ENV': env,
    // }),
  ],
  optimization: {
    noEmitOnErrors: true,
    concatenateModules: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    // splitChunks: {
    //   chunks: 'all',
    //   name: 'common',
    // },
    runtimeChunk: {
      name: 'runtime',
    },
  },
});
