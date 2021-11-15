import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../../styles/Index';
import auth from '@react-native-firebase/auth';
import strings from '../../localization/LocalizedStrings';

//Home Screen
class Home extends React.Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            auth()
              .signOut()
              .then(() => this.props.navigation.navigate('Auth'))
          }>
          <Text style={{paddingRight: 15, fontWeight: 'bold'}}>
            {strings.LOG_OUT}
          </Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    return (
      <View style={styles.CommonStyles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('UserPost');
          }}>
          <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              {strings.PRESS_ME}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
