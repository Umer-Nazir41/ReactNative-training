import React from 'react';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';
import Card from './components/Card';
import Profile from './screen/Profile/Profile';
import Home from './screen/Home';
import UserProfile from './screen/UserData/UserProfile';

LogBox.ignoreAllLogs();

export default function App() {
  return <Navigation />;
}
