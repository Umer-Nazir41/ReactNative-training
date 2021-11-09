import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

//Login Page
const Login = ({navigation}) => {
  //State variable and hook to change them
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

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
      {/* Display loader while making signin request */}
      <Loader loading={isLoading} color="#ff66be" />
      {/* Header */}
      <View style={styles.AuthStyles.HeaderView}>
        <Text style={styles.AuthStyles.headerText}>LOGIN</Text>
      </View>

      {/* Input Form */}
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={40}
          placeholder="Email"
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
          placeholder="Password"
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
        <Text>Forget Password</Text>
      </TouchableOpacity>

      {/* Move to Sign UP */}
      <Button
        style={[styles.AuthStyles.button, {bottom: 80}]}
        mode="contained"
        onPress={() => navigation.push('CreateAccount')}>
        Sign UP
      </Button>

      {/* SignIN Button With null value validation */}
      <Button
        style={styles.AuthStyles.button}
        mode="contained"
        disabled={email === '' || password === ''}
        onPress={() => {
          __doSingIn(email, password);
        }}>
        Login
      </Button>
    </View>
  );
};

export default Login;
