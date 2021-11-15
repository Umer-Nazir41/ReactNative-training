import React from 'react';
import {Text, View, TextInput, I18nManager, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styles from '../../styles/Index';
import auth from '@react-native-firebase/auth';
import Loader from 'react-native-modal-loader';

import strings from '../../localization/LocalizedStrings';
import RNRestart from 'react-native-restart';
import {setLng, getLng} from '../../utilities/LangHandler';
import {emailValidator, passValidator} from '../../utilities/Validator';

// Login Screen
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      emailValid: false,
      passValid: false,
    };

    //Bind function with class
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
    this.onChangeEmailValidity = this.onChangeEmailValidity.bind(this);
    this.onChangePassValidity = this.onChangePassValidity.bind(this);
  }

  // Getter / Setter
  onChangeEmail(email) {
    this.setState({email});
    emailValidator(email)
      ? this.onChangeEmailValidity(true)
      : this.onChangeEmailValidity(false);
  }

  onChangePassword(pass) {
    this.setState({password: pass});
    passValidator(pass)
      ? this.onChangePassValidity(true)
      : this.onChangePassValidity(false);
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  onChangeEmailValidity(value) {
    this.setState({emailValid: value});
  }

  onChangePassValidity(value) {
    this.setState({passValid: value});
  }

  selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
    console.log('selected Language data==>>>', lngData);
  };

  onChangeLng = async lng => {
    if (lng === 'en') {
      await I18nManager.forceRTL(false);
      setLng('en');
      RNRestart.Restart();
      return;
    }

    if (lng === 'ur') {
      await I18nManager.forceRTL(true);
      setLng('ur');
      RNRestart.Restart();
      return;
    }
  };

  //Firebase Signin call with persistance
  __doSingIn = async (email, password) => {
    try {
      this.onChangeLoading(true);
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        this.onChangeEmail('');
        this.onChangePassword('');
        this.onChangeLoading(false);

        //Move to home if successfully verified
        this.props.navigation.navigate('Home');
      }
    } catch (e) {
      this.onChangeLoading(false);
      alert(e.message);
      console.error(e.message);
    }
  };

  componentDidMount() {
    this.selectedLng();
  }

  render() {
    //Destructuring State variables
    const {email, password, isLoading, emailValid, passValid} = this.state;

    return (
      <View style={styles.AuthStyles.mainView}>
        {/* Display loader while making signin request */}
        <Loader loading={isLoading} color="#ff66be" />
        {/* Header */}
        <View style={[styles.AuthStyles.HeaderView]}>
          <Text style={styles.AuthStyles.headerText}>{strings.LOGIN}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '15%',
            left: '20%',
            width: '100%',
          }}>
          <Button
            style={{
              borderColor: '#000',
              borderWidth: 1,
              width: '30%',
            }}
            onPress={() => {
              this.onChangeLng('en');
            }}>
            English
          </Button>
          <View style={{width: '2%'}}></View>
          <Button
            style={{
              width: '30%',
              borderColor: '#000',
              borderWidth: 1,
            }}
            onPress={() => {
              this.onChangeLng('ur');
            }}>
            {strings.URDU}
          </Button>
        </View>

        {/* Input Form */}
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
          <View>
            {emailValid || email === '' ? (
              <Text></Text>
            ) : (
              <Text>{strings.EMAIL_WARNING}</Text>
            )}
          </View>
        </View>

        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={40}
            placeholder={`${strings.PASSWORD}`}
            secureTextEntry={true}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangePassword(text)}
            value={password}
            style={styles.AuthStyles.InputField}
          />
          <View>
            {passValid || password === '' ? (
              <Text></Text>
            ) : (
              <Text>{strings.PASSWORD_WARNING}</Text>
            )}
          </View>
        </View>

        {/* Forget Password Button */}
        <TouchableOpacity
          style={styles.AuthStyles.forgetPassword}
          onPress={() => this.props.navigation.push('ForgetPassword')}>
          <Text>{strings.FORGET_PASSWORD}</Text>
        </TouchableOpacity>

        {/* Move to Sign UP */}
        <Button
          style={[styles.AuthStyles.button, {bottom: 80}]}
          mode="contained"
          onPress={() => this.props.navigation.push('CreateAccount')}>
          {strings.SIGN_UP}
        </Button>

        {/* SignIN Button With null value validation */}
        <Button
          style={styles.AuthStyles.button}
          mode="contained"
          disabled={email === '' || password === ''}
          onPress={() => {
            this.__doSingIn(email, password);
          }}>
          {strings.SIGN_IN}
        </Button>
      </View>
    );
  }
}

export default Login;
