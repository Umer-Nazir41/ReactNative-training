import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/Index';
import auth from '@react-native-firebase/auth';

//Home Page
const Home = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            auth()
              .signOut()
              .then(() => navigation.navigate('Auth'))
          }>
          <Text style={{paddingRight: 15, fontWeight: 'bold'}}>Log Out</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, route]);

  return (
    <View style={styles.CommonStyles.container}>
      <TouchableOpacity onPress={() => navigation.push('UserPost')}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
