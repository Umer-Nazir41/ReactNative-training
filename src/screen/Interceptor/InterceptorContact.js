import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../../localization/LocalizedStrings';

const InterceptorUploadContact = ({route}) => {
  const [firstName, onChangeFirstName] = React.useState('');
  const [phoneNumber, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  const {token} = route.params;

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateContact = async (firstName, phoneNumber) => {
    console.log(firstName, phoneNumber, token);
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
          headers: {Authorization: `Bearer ${token}`},
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

  return (
    <View style={styles.CommonStyles.container}>
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.FIRST_NAME}`}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeFirstName(text)}
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
          onChangeText={text => onChangePassword(text)}
          value={phoneNumber}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <TouchableOpacity
        style={[styles.InterceptorStyles.button, {bottom: 30}]}
        mode="contained"
        disabled={phoneNumber === '' || firstName === ''}
        onPress={() => {
          CreateContact(firstName, phoneNumber);
        }}>
        <Text
          style={[
            styles.InterceptorStyles.centerItem,
            {
              fontWeight: 'bold',
            },
          ]}>
          {strings.CONTACT_CREATE}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorUploadContact;
