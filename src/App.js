import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';
import {store} from './store/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
