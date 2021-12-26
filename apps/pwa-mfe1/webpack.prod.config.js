const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "pwaMFE1",
    publicPath: "https://pwa-module-fed.herokuapp.com/pwa-mfe1/"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: {type: "module"},

      // For remotes (please adjust)
      name: "pwaMfe",
      filename: "remoteEntry.js",
      exposes: {
        './Module': 'apps/pwa-mfe1/src/modules/flights/flights.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "pwaMfe1": "http://localhost:4200/remoteEntry.js",
      //     "server": "http://localhost:4200/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
