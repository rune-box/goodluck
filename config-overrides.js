const webpack = require("webpack");

module.exports = function override(config, env) {
  console.log("React app rewired works!")
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve("buffer"),
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    "path": require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
  };
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            //process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]
  return config;
};