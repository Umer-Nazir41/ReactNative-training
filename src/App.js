import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
//import store from './store/index';

LogBox.ignoreAllLogs();

export default function App() {
  return <Navigation />;
}
