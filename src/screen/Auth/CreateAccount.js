import React, {Component, useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth, {firebase} from '@react-native-firebase/auth';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

//Sign UP Page
const SignUP = ({navigation}) => {
  //State variable to hold state and hooks to change them
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  const [authenticated, onChangeAuth] = React.useState(false);
  const [isLoggedIn, onChangeLoggedIn] = React.useState(false);

  //Firebase function to signup using email
  //and password
  const CreateUserAccount = (email, password) => {
    onChangeLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        onChangePassword('');
        onChangeEmail('');
        //console.log('User account created & signed in!');
        onChangeLoading(false);
        //if successfully signup -> navigate to login screen
        navigation.navigate('SignIn');
      })
      .catch(error => {
        //Email Already Exists
        if (error.code === 'auth/email-already-in-use') {
          onChangeLoading(false);
          Alert.alert('That email address is already in use!');
          //console.log('That email address is already in use!');
        }
        //Invalid Email
        if (error.code === 'auth/invalid-email') {
          onChangeLoading(false);
          Alert.alert('That email address is invalid!');
          //console.log('That email address is invalid!');
        }
        onChangeLoading(false);
        console.error(error);
      });
    onChangeLoading(false);
  };

  return (
    <View style={styles.AuthStyles.mainView}>
      {/* Display loader while making signup request */}
      <Loader loading={isLoading} color="#ff66be" />

      {/* Header */}
      <View style={styles.AuthStyles.HeaderView}>
        <Text style={styles.AuthStyles.headerText}>SIGN UP</Text>
      </View>

      {/* Input Form */}
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
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
          maxLength={20}
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
        disabled={password === '' || email === ''}
        onPress={() => {
          CreateUserAccount(email, password);
        }}>
        Sign UP
      </Button>
    </View>
  );
};

export default SignUP;
