import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

//Login Page
const Login = ({navigation}) => {
  //State variable and hook to change them
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.AuthStyles.mainView}>
      {/* Header */}
      <View style={styles.AuthStyles.HeaderView}>
        <Text style={styles.AuthStyles.headerText}>LOGIN</Text>
      </View>

      {/* Input Form */}
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={40}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeUsername(text)}
          value={username}
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
        disabled={username === '' || password === ''}
        onPress={() => {
          //console.log(username, password);
          onChangeUsername('');
          onChangePassword('');
          if (username !== '' && password !== '') {
            //console.log(username, password);
            navigation.push('Home');
          }
        }}>
        Login
      </Button>
    </View>
  );
};

export default Login;
