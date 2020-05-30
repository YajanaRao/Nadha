const path = require("path");
module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      }
    );
    config.resolve.extensions.push(".ts", ".tsx", ".web.tsx", ".web.ts");
    config.resolve.alias = {
      "react-native": "react-native-web",
    };
    config.externals = {
      react: "React",
      "react-dom": "ReactDOM",
    };
    return config;
  },
};
