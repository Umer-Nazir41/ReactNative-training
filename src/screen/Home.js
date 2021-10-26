import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Home Page
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hello From Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
