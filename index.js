/**
 * @format
 */
import { AppRegistry, Text } from 'react-native';
import App from '@nadha/app';
import { name as appName } from './app.json';
require('react-native').unstable_enableLogBox()
AppRegistry.registerComponent(appName, () => App);

