import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../../localization/LocalizedStrings';

const InterceptorLogin = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const LogInUser = async (username, password) => {
    console.log(username, password);
    await axios
      .post('/auth/login', {
        username: username,
        password: password,
      })
      .then(response => {
        console.log('Then', response.data.token);
        onChangeUsername('');
        onChangePassword('');
        Alert.alert('Successfully logged IN, Auth Token', response.data.token);
        navigation.navigate('InterceptorUploadContact', {
          token: response.data.token,
        });
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

  return (
    <View style={styles.CommonStyles.container}>
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.USERNAME}`}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeUsername(text)}
          value={username}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.PASSWORD}`}
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.InterceptorStyles.button,
          {
            bottom: 60,
          },
        ]}
        onPress={() => {
          navigation.navigate('InterceptorScreen');
        }}>
        <Text style={{alignItems: 'center', justifyContent: 'center'}}>
          {strings.SIGN_UP}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.InterceptorStyles.button,
          {
            bottom: 30,
          },
        ]}
        mode="contained"
        onPress={() => {
          LogInUser(username, password);
        }}>
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}>
          {strings.SIGN_IN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorLogin;
