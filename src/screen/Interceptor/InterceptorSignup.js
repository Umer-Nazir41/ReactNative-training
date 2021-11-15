import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../../localization/LocalizedStrings';

class InterceptorSignup extends React.Component {
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

  CreateUserAccount = async (username, password) => {
    axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';
    console.log(username, password);
    try {
      axios
        .post('/auth/register', {
          username: username,
          first_name: `${username}`,
          last_name: 'google123',
          email: `${username}@gmail.com`,
          password: password,
        })
        .then(response => {
          console.log('Then', response);
          this.onChangeUsername('');
          this.onChangePassword('');
          this.props.navigation.navigate('InterceptorLogin');
        })
        .catch(error => {
          Alert.alert(error);
          console.log('Catch', error);
        });
    } catch (err) {
      console.log('Error While signing up!! ', err);
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
            this.props.navigation.navigate('InterceptorLogin');
          }}>
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>
            {strings.SIGN_IN}
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
            this.CreateUserAccount(this.state.username, this.state.password);
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}>
            {strings.SIGN_UP}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InterceptorSignup;
