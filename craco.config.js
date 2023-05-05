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
      webpackConfig.output = { ...webpackConfig.output, path: path.resolve(__dirname, 'docs')}
      return webpackConfig
    }
  }

};
