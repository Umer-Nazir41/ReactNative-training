import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from '../../styles/Index';

//Profile Screen
class Profile extends React.Component {
  render() {
    return (
      <View style={styles.commonStyles.container}>
        <Text>Hello From Profile</Text>
      </View>
    );
  }
}

export default Profile;
