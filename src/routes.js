// import React from 'react';
// import { Image } from 'react-native';
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import OfferedWines from './pages/OfferedWines';
import WishedWines from './pages/WishedWines';

// const { MAIN_COLOR_CONTRAST } = Colors;

const AppStack = createStackNavigator(
  {
    Login,
    WishedWines,
    OfferedWines,
    Home,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppStack);
