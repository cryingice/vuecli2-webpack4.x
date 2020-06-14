const path = require ('path');

module.exports = {
  dev: {
    //dev-serve
    host: '127.0.0.1',
    port: 9090,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    assetsPublicPath: '/',

    devtool: 'cheap-module-eval-source-map',
    proxyTable: {},

    cssSourceMap: true,
    assetsSubDirectory: 'assets',
  },
  build: {
    index: path.resolve (__dirname, '../dist/index.html'),
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    errorOverlay: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    assetsPublicPath: '/',
    assetsSubDirectory: 'assets',
  },
};
