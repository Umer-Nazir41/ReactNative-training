import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/Index';
import auth from '@react-native-firebase/auth';
import strings from '../../localization/LocalizedStrings';

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
          <Text style={{paddingRight: 15, fontWeight: 'bold'}}>
            {strings.LOG_OUT}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, route]);

  return (
    <View style={styles.CommonStyles.container}>
      <TouchableOpacity onPress={() => navigation.push('UserPost')}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>
          {strings.PRESS_ME}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
