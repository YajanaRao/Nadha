/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const currentDir = __dirname;
const workspaces = getWorkspaces(currentDir);

const config = {
  watchFolders: [
    // To allow finding files outside mobile
    path.resolve(currentDir, '..'),
    ...workspaces.filter((workspaceDir) => !(workspaceDir === currentDir)),
  ],

  resolver: {
    extraNodeModules: {
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
      'react-native-vector-icons': path.resolve(
        currentDir,
        'node_modules/react-native-vector-icons',
      ),
      '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime'),
    },
  },
};

module.exports = config;
