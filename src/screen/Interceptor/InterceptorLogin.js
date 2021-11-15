import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../../localization/LocalizedStrings';

class InterceptorLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };

    //Bind function with class
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  // Getter / Setter
  onChangeUsername(value) {
    this.setState({username: value});
  }

  onChangePassword(value) {
    this.setState({password: value});
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Firebase Signin call with persistance
  LogInUser = async (username, password) => {
    axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';
    console.log(username, password);
    try {
      await axios
        .post('/auth/login', {
          username: username,
          password: password,
        })
        .then(response => {
          console.log('Then', response.data.token);
          this.onChangeUsername('');
          this.onChangePassword('');
          Alert.alert(
            'Successfully logged IN, Auth Token',
            response.data.token,
          );
          this.props.navigation.navigate('InterceptorUploadContact', {
            token: response.data.token,
          });
        })
        .catch(error => {
          Alert.alert(error);
          console.log('Catch', error);
        });
    } catch (err) {
      Alert.alert('Error while signing in! ', err);
    }
  };

  render() {
    //Destructuring State variables
    const {username, password, isLoading} = this.state;

    return (
      <View style={styles.CommonStyles.container}>
        <Loader loading={isLoading} color="#ff66be" />
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={20}
            placeholder={`${strings.USERNAME}`}
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
            placeholder={`${strings.PASSWORD}`}
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangePassword(text)}
            value={password}
            style={styles.AuthStyles.InputField}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.AuthStyles.button,
            {justifyContent: 'center', alignItems: 'center', bottom: 80},
          ]}
          onPress={() => {
            this.props.navigation.navigate('InterceptorSignup');
          }}>
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>
            {strings.SIGN_UP}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.AuthStyles.button,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          mode="contained"
          disabled={password === '' || username === ''}
          onPress={() => {
            this.LogInUser(username, password);
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}>
            {strings.SIGN_IN}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InterceptorLogin;
