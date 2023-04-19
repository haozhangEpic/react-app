const CracoCSSModules = require("craco-css-modules");

const CracoLess = require("craco-less");
module.exports = {
  plugins: [
    { plugin: CracoLess },
    { plugin: CracoCSSModules },
  ],
};
