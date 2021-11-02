import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';

const UserProfile = ({route, navigation}) => {
  const {title, id, body} = route.params;

  const [userProfile, onChangeUserProfile] = useState({name: '', email: ''});
  const [userPhoto, onChangeUserPhoto] = useState({url: ''});

  // useEffect(() => {
  // 	const getProfile = async () =>
  // 	{

  //     const users = await axios
  //       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then(function (response) {
  //         //console.log(response.data.name, response.data.email);
  //         onChangeUserProfile(userProfile => (userProfile = response.data));
  //       })
  //       .catch(function (error) {
  //         alert(error.message);
  //         navigation.goBack();
  //       });
  //   };

  //   getProfile();
  // }, []);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        let users = await response.json();
        onChangeUserProfile(userProfile => (userProfile = users));
      } catch {
        alert(error.message);
        navigation.goBack();
      }
    };

    getPhoto();
  }, []);

  useEffect(() => {
    const getPhoto = async () => {
      //console.log(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const users = await axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(function (response) {
          onChangeUserPhoto(userPhoto => (userPhoto = response.data));
        })
        .catch(function (error) {
          alert(error.message);
          navigation.goBack();
        });
    };

    getPhoto();
  }, []);

  return (
    <View style={styles.UserStyles.userContainer}>
      <View style={styles.UserStyles.mainView}>
        <View style={styles.UserStyles.photoView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserDetails', {
                id: id,
                url: userPhoto.url,
              });
            }}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: `${userPhoto && userPhoto.url}`,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.UserStyles.userNameView}>
          <Text style={styles.UserStyles.userNameText}>{userProfile.name}</Text>
          <Text style={styles.UserStyles.userNameEmail}>
            {userProfile.email}
          </Text>
        </View>
      </View>
      <View style={styles.UserStyles.divider} />
      <View style={styles.UserStyles.textView}>
        <Text style={styles.UserStyles.titleText}>{title}</Text>
        <Text style={styles.UserStyles.emailText}>{body}</Text>
      </View>
    </View>
  );
};

export default UserProfile;
