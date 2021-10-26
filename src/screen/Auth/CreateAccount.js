import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

//Sign UP Page
class SignUP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
  }

  // User Name
  onChangeUsername(value) {
    this.setState({username: value});
  }

  //Password
  onChangePassword(value) {
    this.setState({password: value});
  }

  //Confirm Password
  onChangeConfirmPassword(value) {
    this.setState({confirmPassword: value});
  }

  render() {
    //Destructuring State variables
    const {username, password, confirmPassword} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
        {/* Header */}
        <View style={styles.AuthStyles.HeaderView}>
          <Text style={styles.AuthStyles.headerText}>SIGN UP</Text>
        </View>

        {/* User Form */}
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={20}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangeUsername(text)}
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
            onChangeText={text => this.onChangePassword(text)}
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
            onChangeText={text => this.onChangeConfirmPassword(text)}
            value={confirmPassword}
            style={styles.AuthStyles.InputField}
          />
        </View>

        {/* Forget Password Button*/}
        <TouchableOpacity
          style={styles.AuthStyles.forgetPassword}
          onPress={() => this.props.navigation.navigate('ForgetPassword')}>
          <Text>Forget Password</Text>
        </TouchableOpacity>

        {/* Sign IN Button */}
        <Button
          style={[styles.AuthStyles.button, {bottom: 80}]}
          mode="contained"
          onPress={() => this.props.navigation.pop()}>
          Already Have an Account
        </Button>

        {/* SignUP Button */}
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
            this.onChangeUsername('');
            this.onChangePassword('');
            this.onChangeConfirmPassword('');
            if (username !== '' && password !== '') {
              console.log(username, password, confirmPassword);
            }
          }}>
          Sign UP
        </Button>
      </View>
    );
  }
}

export default SignUP;
