import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, I18nManager} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

import strings from '../../localization/LocalizedStrings';
import RNRestart from 'react-native-restart';
import {setLng, getLng} from '../../utilties/LangHandler';

//Login Page
const Login = ({navigation, route: {lang}}) => {
  //State variable and hook to change them
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoading, onChangeLoading] = useState(false);

  //Language Switch
  const onChangeLng = async lng => {
    await setLng(lng);
    RNRestart.Restart();
  };

  //Firebase Signin call with persistance
  const __doSingIn = async (email, password) => {
    try {
      onChangeLoading(true);
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        onChangePassword('');
        onChangeEmail('');
        onChangeLoading(false);
        //Move to home if successfully verified
        navigation.navigate('Home');
      }
    } catch (e) {
      onChangeLoading(false);
      alert(e.message);
      console.error(e.message);
    }
  };

  return (
    <View style={styles.AuthStyles.mainView}>
      {console.log('Rendered')}
      {/* Display loader while making signin request */}
      <Loader loading={isLoading} color="#ff66be" />
      {/* Header */}
      <View style={[styles.AuthStyles.HeaderView]}>
        <Text style={styles.AuthStyles.headerText}>{strings.LOGIN}</Text>
      </View>
      <View style={styles.AuthStyles.langButtonView}>
        <Button
          style={styles.AuthStyles.langButton}
          onPress={() => {
            onChangeLng('en');
          }}>
          English
        </Button>
        <View style={{width: '2%'}}></View>
        <Button
          style={styles.AuthStyles.langButton}
          onPress={() => {
            onChangeLng('ur');
          }}>
          {strings.URDU}
        </Button>
      </View>

      {/* Input Form */}
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={40}
          placeholder={`${strings.EMAIL}`}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeEmail(text)}
          value={email}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={40}
          placeholder={`${strings.PASSWORD}`}
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.AuthStyles.InputField}
        />
      </View>

      {/* Forget Password Button */}
      <TouchableOpacity
        style={styles.AuthStyles.forgetPassword}
        onPress={() => navigation.push('ForgetPassword')}>
        <Text>{strings.FORGET_PASSWORD}</Text>
      </TouchableOpacity>

      {/* Move to Sign UP */}
      <Button
        style={[styles.AuthStyles.button, {bottom: 80}]}
        mode="contained"
        onPress={() => navigation.push('CreateAccount')}>
        {strings.SIGN_UP}
      </Button>

      {/* SignIN Button With null value validation */}
      <Button
        style={styles.AuthStyles.button}
        mode="contained"
        disabled={email === '' || password === ''}
        onPress={() => {
          __doSingIn(email, password);
        }}>
        {strings.SIGN_IN}
      </Button>
    </View>
  );
};

export default Login;
