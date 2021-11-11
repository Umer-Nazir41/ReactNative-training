import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';

import strings from '../../localization/LocalizedStrings';
import {emailValidator, passValidator} from '../../utilties/Validator';

const InterceptorScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateUserAccount = async (username, password) => {
    console.log(username, password);
    axios
      .post('/auth/register', {
        username: username,
        first_name: 'umer46',
        last_name: 'nazir651',
        email: `${username}@example.com`,
        password: password,
      })
      .then(response => {
        console.log('Then', response);
        onChangeUsername('');
        onChangePassword('');
        navigation.navigate('InterceptorLogin');
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

  return (
    <View style={styles.AuthStyles.mainView}>
      {/* Display loader while making signup request */}
      <Loader loading={isLoading} color="#ff66be" />

      {/* Input Form */}
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

      {/* Back to Sign IN */}
      <TouchableOpacity
        style={[
          styles.InterceptorStyles.button,
          {
            bottom: 60,
          },
        ]}
        mode="contained"
        title={strings.SIGN_IN}
        onPress={() => navigation.navigate('InterceptorLogin')}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{strings.SIGN_IN}</Text>
        </Text>
      </TouchableOpacity>

      {/* SignUP Button With null value validation */}
      <TouchableOpacity
        style={[
          styles.InterceptorStyles.button,
          {
            bottom: 30,
          },
        ]}
        onPress={() => {
          emailValidator(username)
            ? passValidator(password)
              ? CreateUserAccount(username, password)
              : Alert.alert('Password must be greater than 7 character')
            : Alert.alert('Email is not Correct');
        }}>
        <Text style={{fontWeight: 'bold'}}>{strings.SIGN_UP}</Text>
      </TouchableOpacity>
    </View>

    // <View style={styles.AuthStyles.mainView}>
    //   <Loader loading={isLoading} color="#ff66be" />
    //   <View style={styles.AuthStyles.inputView}>
    //     <TextInput
    //       editable
    //       maxLength={20}
    //       placeholder={`${strings.USERNAME}`}
    //       placeholderTextColor="#003f5c"
    //       onChangeText={text => onChangeUsername(text)}
    //       value={username}
    //       style={styles.AuthStyles.InputField}
    //     />
    //   </View>

    //   <View style={styles.AuthStyles.inputView}>
    //     <TextInput
    //       editable
    //       maxLength={20}
    //       placeholder={`${strings.PASSWORD}`}
    //       secureTextEntry={true}
    //       placeholderTextColor="#003f5c"
    //       onChangeText={text => onChangePassword(text)}
    //       value={password}
    //       style={styles.AuthStyles.InputField}
    //     />
    //   </View>

    //   <Button
    //     style={styles.AuthStyles.button}
    //     mode="contained"
    //     title={strings.SIGN_IN}
    //     onPress={() => navigation.navigate('InterceptorLogin')}
    //   />

    //   <Button
    //     style={{
    //       width: '80%',
    //       alignSelf: 'center',
    //       position: 'absolute',
    //       bottom: 30,
    //       borderRadius: 50,
    //       borderColor: '#FF1493',
    //     }}
    //     mode="contained"
    //     title={strings.SIGN_UP}
    //     disabled={password === '' || username === ''}
    //     onPress={() => {
    //       emailValidator(username)
    //         ? passValidator(password)
    //           ? CreateUserAccount(username, password)
    //           : Alert.alert('Password must be greater than 7 character')
    //         : Alert.alert('Email is not Correct');
    //     }}
    //   />
    // </View>
  );
};

export default InterceptorScreen;
