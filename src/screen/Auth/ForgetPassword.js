import React from 'react';
import {View, TextInput, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import auth, {firebase} from '@react-native-firebase/auth';
import Loader from 'react-native-modal-loader';

//Forget password Screen
const ForgetPassword = ({navigation}) => {
  //State variable and hook to change them
  const [email, onChangeEmail] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  //Firebase function to request
  // Reset link
  ResetPassword = email => {
    onChangeLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        onChangeEmail('');
        alert('Please check your email...');
        //Navigate to login screen if successfully
        //requested reset link
        onChangeLoading(false);
        navigation.navigate('SignIn');
      })
      .catch(function (e) {
        onChangeLoading(false);
        alert(e);
        //console.log(e);
      });
    onChangeLoading(false);
  };

  return (
    <View style={styles.AuthStyles.mainView}>
      {/* Display loader while making reset link request */}
      <Loader loading={isLoading} color="#ff66be" />
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

      {/* Button To search and reset password */}
      <Button
        style={styles.AuthStyles.button}
        mode="contained"
        onPress={() => {
          ResetPassword(email);
        }}>
        Send Reset Link
      </Button>
    </View>
  );
};

export default ForgetPassword;
