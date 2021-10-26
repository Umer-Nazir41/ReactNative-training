import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

//Sign UP Page
const SignUP = ({navigation}) => {
  //State variable to hold state and hooks to change them
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  return (
    <View style={styles.AuthStyles.mainView}>
      {/* Header */}
      <View style={styles.AuthStyles.HeaderView}>
        <Text style={styles.AuthStyles.headerText}>SIGN UP</Text>
      </View>

      {/* Input Form */}
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
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
          maxLength={20}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeConfirmPassword(text)}
          value={confirmPassword}
          style={styles.AuthStyles.InputField}
        />
      </View>

      {/* Forget Password Button */}
      <TouchableOpacity
        style={styles.AuthStyles.forgetPassword}
        onPress={() => navigation.push('ForgetPassword')}>
        <Text>Forget Password</Text>
      </TouchableOpacity>

      {/* Back to Sign IN */}
      <Button
        style={[styles.AuthStyles.button, {bottom: 80}]}
        mode="contained"
        onPress={() => navigation.pop()}>
        Already Have an Account
      </Button>

      {/* SignUP Button With null value validation */}
      <Button
        style={styles.AuthStyles.button}
        mode="contained"
        disabled={
          password === '' ||
          confirmPassword === '' ||
          password !== confirmPassword
        }
        onPress={() => {
          console.log(username, password, confirmPassword);
          onChangeUsername('');
          onChangePassword('');
          onChangeConfirmPassword('');
          if (username !== '' && password !== '') {
            console.log(username, password);
          }
        }}>
        Sign UP
      </Button>
    </View>
  );
};

export default SignUP;
