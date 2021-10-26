import React from 'react';
import {Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

// Login Screen
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  // User Name
  onChangeUsername(value) {
    this.setState({username: value});
  }

  // Password
  onChangePassword(value) {
    this.setState({password: value});
  }

  render() {
    //Destructuring State variables
    const {username, password} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
        {/* Header */}
        <View style={styles.AuthStyles.HeaderView}>
          <Text style={styles.AuthStyles.headerText}>LOGIN</Text>
        </View>

        {/* User Input Form */}
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={40}
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
            maxLength={40}
            placeholder="Password"
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
          <Text>Forget Password</Text>
        </TouchableOpacity>

        {/* SignUP Button */}
        <Button
          style={[styles.AuthStyles.button, {bottom: 80}]}
          mode="contained"
          onPress={() => this.props.navigation.navigate('CreateAccount')}>
          Sign UP
        </Button>

        {/* Sign IN Button With Empty Field Validation */}
        <Button
          style={styles.AuthStyles.button}
          mode="contained"
          disabled={username === '' || password === ''}
          onPress={() => {
            console.log(username, password);
            this.onChangeUsername('');
            this.onChangePassword('');
            if (username !== '' && password !== '') {
              console.log(username, password);
              this.props.navigation.navigate('Home');
            }
          }}>
          Login
        </Button>
      </View>
    );
  }
}

export default Login;
