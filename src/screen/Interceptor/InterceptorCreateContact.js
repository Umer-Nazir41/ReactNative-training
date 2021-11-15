import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../../localization/LocalizedStrings';

class InterceptorUploadContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      phoneNumber: '',
      isLoading: false,
    };

    //Bind function with class
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  // Getter / Setter
  onChangeFirstName(value) {
    this.setState({firstName: value});
  }

  onChangePhoneNumber(value) {
    this.setState({phoneNumber: value});
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Firebase Signin call with persistance
  CreateContact = async (firstName, phoneNumber) => {
    axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';
    //console.log(firstName, phoneNumber, token);
    await axios
      .post(
        '/contacts/',
        {
          country_code: '+92',
          first_name: firstName,
          last_name: 'string',
          phone_number: phoneNumber,
          is_favorite: true,
        },
        {
          headers: {Authorization: `Bearer ${this.props.route.params.token}`},
        },
      )
      .then(response => {
        console.log('Then', response.data);
        Alert.alert(
          'Contact created Successfully using token',
          response.data.phone_number,
        );
      })
      .catch(error => {
        Alert.alert('Failed', error);
        console.log('Catch', error);
      });
  };

  render() {
    //Destructuring State variables
    const {firstName, phoneNumber, isLoading} = this.state;

    return (
      <View style={styles.CommonStyles.container}>
        <Loader loading={isLoading} color="#ff66be" />
        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={20}
            placeholder={`${strings.FIRST_NAME}`}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangeFirstName(text)}
            value={firstName}
            style={styles.AuthStyles.InputField}
          />
        </View>

        <View style={styles.AuthStyles.inputView}>
          <TextInput
            editable
            maxLength={20}
            placeholder={`${strings.PHONE_NUMBER}`}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangePhoneNumber(text)}
            value={phoneNumber}
            style={styles.AuthStyles.InputField}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.AuthStyles.button,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          mode="contained"
          disabled={phoneNumber === '' || firstName === ''}
          onPress={() => {
            this.CreateContact(firstName, phoneNumber);
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}>
            {strings.CONTACT_CREATE}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InterceptorUploadContact;
