import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import auth from '@react-native-firebase/auth';
import Loader from 'react-native-modal-loader';
import strings from '../../localization/LocalizedStrings';

//Sign UP Page
class SignUP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };

    //Bind function with class
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  // Getter / Setter
  onChangeEmail(value) {
    this.setState({email: value});
  }

  onChangePassword(value) {
    this.setState({password: value});
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Firebase function to signup using email
  //and password

  firebaseAuth = async (email, password) => {
    this.onChangeLoading(true);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.onChangeEmail('');
        this.onChangePassword('');
        this.onChangeLoading(false);
        //if successfully signup -> navigate to login screen
        this.props.navigation.navigate('SignIn');
      })
      .catch(error => {
        //Email Already Exists
        if (error.code === 'auth/email-already-in-use') {
          this.onChangeLoading(false);
          Alert.alert('That email address is already in use!');
        }
        //Invalid Email
        if (error.code === 'auth/invalid-email') {
          this.onChangeLoading(false);
          Alert.alert('That email address is invalid!');
        }
        this.onChangeLoading(false);
        console.error(error);
      });
    this.onChangeLoading(false);
  };

  render() {
    //Destructuring State variables
    const {email, password, isLoading} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
        {/* Display loader while making signup request */}
        <Loader loading={isLoading} color="#ff66be" />
        {/* Header */}
        <View style={styles.AuthStyles.HeaderView}>
          <Text style={styles.AuthStyles.headerText}>SIGN UP</Text>
        </View>

        {/* User Form */}
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={20}
            placeholder={`${strings.EMAIL}`}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangeEmail(text)}
            value={email}
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
            onChangeText={text => this.onChangePassword(text)}
            value={password}
            style={styles.AuthStyles.InputField}
          />
        </View>

        {/* Forget Password Button*/}
        <TouchableOpacity
          style={styles.AuthStyles.forgetPassword}
          onPress={() => this.props.navigation.navigate('ForgetPassword')}>
          <Text>{strings.FORGET_PASSWORD}</Text>
        </TouchableOpacity>

        {/* Sign IN Button */}
        <Button
          style={[styles.AuthStyles.button, {bottom: 80}]}
          mode="contained"
          onPress={() => this.props.navigation.pop()}>
          {strings.ALREADY_EXIST}
        </Button>

        {/* SignUP Button */}
        <Button
          style={styles.AuthStyles.button}
          mode="contained"
          disabled={password === '' || email === ''}
          onPress={() => {
            this.firebaseAuth(email, password);
          }}>
          {strings.SIGN_UP}
        </Button>
      </View>
    );
  }
}

export default SignUP;
