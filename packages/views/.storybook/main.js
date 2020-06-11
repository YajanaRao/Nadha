module.exports = {
  stories:['../src/stories/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.alias = {
      "react-native": "react-native-web",
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};