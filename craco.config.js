const CracoCSSModules = require("craco-css-modules");
const path = require('path')

const CracoLess = require("craco-less");
module.exports = {
  plugins: [
    { plugin: CracoLess },
    { plugin: CracoCSSModules },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'docs';

      console.log('webpackConfig========>', webpackConfig.plugins)
      console.log('webpackConfig========>', webpackConfig.plugins[6])
      webpackConfig.plugins.splice(6, 1)
      webpackConfig.output = { ...webpackConfig.output, path: path.resolve(__dirname, 'docs'), publicPath: '' }
      return webpackConfig
    }
  }

};
