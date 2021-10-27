import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';

const UserDetails = ({navigation, route}) => {
  const {url, id} = route.params;

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

  useEffect(() => {
    const getProfile = async () => {
      const users = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function (response) {
          //console.log(response.data.name, response.data.email);
          onChangeUserProfile(userProfile => (userProfile = response.data));
          console.log(userProfile.name);
        })
        .catch(function (error) {
          alert(error.message);
        });
    };

    getProfile();
  }, []);

  return (
    <View style={styles.UserStyles.userContainer}>
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
