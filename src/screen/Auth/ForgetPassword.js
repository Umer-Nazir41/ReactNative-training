import React from 'react';
import {View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';

//Forget Password Screen
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  //UserName field Handler
  onChangeUsername(value) {
    this.setState({username: value});
  }

  render() {
    //Destructuring State variables
    const {username} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
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

        {/* Forget Password Button*/}
        <Button
          style={styles.AuthStyles.button}
          mode="contained"
          onPress={() => {
            console.log(username);
          }}>
          Search
        </Button>
      </View>
    );
  }
}

export default ForgetPassword;
