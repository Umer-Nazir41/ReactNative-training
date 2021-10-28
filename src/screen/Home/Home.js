import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../../styles/Index';

//Home Screen
class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('UserPost');
          }}>
          <View>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              Press Me to Call API
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
