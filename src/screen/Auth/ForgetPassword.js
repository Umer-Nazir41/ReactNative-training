import React from 'react';
import {View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import auth, {firebase} from '@react-native-firebase/auth';
import Loader from 'react-native-modal-loader';
import strings from '../../localization/LocalizedStrings';

//Forget Password Screen
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false,
    };

    //Bind function with class
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  // Getter / Setter
  onChangeEmail(value) {
    this.setState({email: value});
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Firebase function to request
  // Reset link
  ResetPassword = email => {
    this.onChangeLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        this.onChangeEmail('');
        alert('Please check your email for reset link');
        this.onChangeLoading(false);

        //Navigate to login screen if successfully
        //requested reset link
        this.props.navigation.navigate('SignIn');
      })
      .catch(function (e) {
        this.onChangeLoading(false);
        alert(e);
        //console.log(e);
      });
    this.onChangeLoading(false);
  };

  render() {
    //Destructuring State variables
    const {email, isLoading} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
        {/* Display loader while making reset link request */}
        <Loader loading={isLoading} color="#ff66be" />
        {/* User Input Form */}
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={40}
            placeholder={`${strings.EMAIL}`}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangeEmail(text)}
            value={email}
            style={styles.AuthStyles.InputField}
          />
        </View>

        {/* Forget Password Button*/}
        <Button
          style={styles.AuthStyles.button}
          mode="contained"
          disabled={email === ''}
          onPress={() => {
            this.ResetPassword(email);
          }}>
          {`${strings.PASSWORD}`}
        </Button>
      </View>
    );
  }
}

export default ForgetPassword;
