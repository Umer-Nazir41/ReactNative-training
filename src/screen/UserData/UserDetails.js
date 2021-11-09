import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

const UserDetails = ({route}) => {
  //PARAMS
  const {url, id} = route.params;

  // Empty object to prevent app from crashing
  // while data is being fetched from api
  const emptyProfile = {
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };

  const [userProfile, onChangeUserProfile] = useState(emptyProfile);
  const [userPhoto, onChangeUserPhoto] = useState({url: ''});
  const [isLoading, onChangeLoading] = React.useState(false);

  //Function To get user details such as username and email
  // Using AXIOS Library
  useEffect(() => {
    onChangeLoading(true);
    const getProfile = async () => {
      const users = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function (response) {
          console.log(response.data.name, response.data.email);
          onChangeUserProfile(userProfile => (userProfile = response.data));
          onChangeLoading(false);
          //console.log(userProfile.name);
        })
        .catch(function (error) {
          onChangeLoading(false);
          alert(error.message);
        });
    };

    //CALL FUNCTION TO GET USER PROFILE
    //AS SOON AS COMPONENT LOADS
    getProfile();
  }, []);

  return (
    <View style={styles.UserStyles.userContainer}>
      {/* DISPLAY LOADER WHILE MAKING DETAILS REQUEST */}
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.UserStyles.mainView}>
        <View style={styles.UserStyles.photoView}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: `${url}`,
            }}
          />
        </View>
        <View style={styles.UserStyles.userNameView}>
          <TouchableOpacity onPress={() => console.log('Hello')}>
            <Text style={styles.UserStyles.userNameText}>
              {userProfile.name}
            </Text>
            <Text style={styles.UserStyles.emailText}>{userProfile.email}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.UserStyles.divider} />
      <View style={styles.UserStyles.textView}>
        <Text style={styles.UserStyles.titleText}>
          Name: {userProfile.name}
          {'\n'}
          Username: {userProfile.username}
          {'\n'}
          Email : {userProfile.email}
          {'\n'}
          Phone: {userProfile.phone}
          {'\n'}
          Website: {userProfile.website}
          {'\n'}
          Company: {(userProfile.company.name, userProfile.company.catchPhrase)}
          {'\n'}
        </Text>
      </View>
    </View>
  );
};

export default UserDetails;
