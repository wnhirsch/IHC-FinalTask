import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import STORE from './store';
import AppStack from './routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAxv2EzVC0EgJ7uXOx1Eor80c9_W8MrCMM',
  authDomain: 'wine2me-e9f9e.firebaseapp.com',
  databaseURL: 'https://wine2me-e9f9e.firebaseio.com',
  projectId: 'wine2me-e9f9e',
  storageBucket: 'wine2me-e9f9e.appspot.com',
  messagingSenderId: '417292874772',
  appId: '1:417292874772:web:e866c8ef385f4b41932301',
  measurementId: 'G-CNE1CWKBNW',
};

firebase.initializeApp(firebaseConfig);

const App = () => (
  <Provider store={STORE}>
    <AppStack />
  </Provider>
);

export default App;
