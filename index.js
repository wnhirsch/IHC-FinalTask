/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { IS_STORYBOOK } from 'react-native-dotenv';
import App from './src/App';
import { name as appName } from './app.json';
import Storybook from './storybook';

let registeredComponent = null;
if (IS_STORYBOOK === 'true') {
  registeredComponent = Storybook;
} else {
  registeredComponent = App;
}

AppRegistry.registerComponent(appName, () => registeredComponent);
