import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

export default App;
