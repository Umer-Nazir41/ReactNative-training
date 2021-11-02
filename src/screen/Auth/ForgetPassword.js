import React from 'react';
import {View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

//Forget password Screen
const ForgetPassword = () => {
  //State variable and hook to change them
  const [username, onChangeUsername] = React.useState('');

  return (
    <View style={styles.AuthStyles.mainView}>
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

      {/* Button To search and reset password */}
      <Button
        style={styles.AuthStyles.button}
        mode="contained"
        onPress={() => {
          //console.log(username);
        }}>
        Search
      </Button>
    </View>
  );
};

export default ForgetPassword;
