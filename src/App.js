import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';

import {store} from './store/store';
import {Provider} from 'react-redux';

import Contact from './screen/Profile/Contact';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

//
