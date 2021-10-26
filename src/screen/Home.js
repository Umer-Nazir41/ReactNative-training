import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from '../styles/Index';

//Home Screen
class Home extends React.Component {
  render() {
    return (
      <View style={styles.commonStyles.container}>
        <Text>Hello From Home</Text>
      </View>
    );
  }
}

export default Home;
