const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        fs: false,
        crypto: false,
        path: false,
        os: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        tls: false,
        net: false,
        url: false,
        assert: false,
        buffer: false,
        util: false,
        tty: false,
        querystring: false,
        child_process: false,
        worker_threads: false,
        sqlite: false,
        "node:sqlite": false
      };

      config.plugins.push(
        new webpack.IgnorePlugin({
          checkResource(resource) {
            return resource.startsWith("node:");
          }
        })
      );

      return config;
    }
  }
};