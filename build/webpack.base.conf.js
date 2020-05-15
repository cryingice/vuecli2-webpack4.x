const path = require ('path');
const utils = require ('./utils');
const config = require ('../config');
const vueLoaderConfig = require ('./vue-loader.conf');
const VueLoaderPlugin = require ('vue-loader/lib/plugin');
function resolve (dir) {
  return path.join (__dirname, '..', dir);
}
module.exports = {
  context: path.resolve (__dirname, '../'),
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve (__dirname, '../dist'),
    filename: 'assets/js/[name].[hash:7].js',
    publicPath: config.dev.assetsPublicPath,
    // process.env.NODE_ENV === 'production'
    //   ? config.build.assetsPublicPath
    //   : config.dev.assetsPublicPath,
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? config.build.assetsPublicPath
    //   : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve (__dirname, '../src'),
      '@A': path.resolve (__dirname, '../src/assets'),
      '@C': path.resolve (__dirname, '../src/components'),
      '@V': path.resolve (__dirname, '../src/views'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig,
      },
      // {
      //   test: /\.css$/,
      //   use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      // },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          resolve ('src'),
          resolve ('test'),
          resolve ('node_modules/webpack-dev-server/client'),
        ],
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10000,
              name: 'assets/img/[name].[hash:7].[ext]',
              // name: utils.assetsPath ('img/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,

        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath ('assets/media/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath ('assets/fonts/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin ()],
};
