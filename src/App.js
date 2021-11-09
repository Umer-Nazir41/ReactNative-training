import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';

import {store} from './store/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

//CONNECT REDUX STORE WITH APP
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
