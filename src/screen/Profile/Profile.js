import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Profile Page
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Profile</Text>
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

export default Profile;
