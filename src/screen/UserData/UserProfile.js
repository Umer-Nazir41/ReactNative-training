import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

//Full post detail with images, user details and post details
const UserProfile = ({route, navigation}) => {
  const {title, id, body} = route.params;

  const [userProfile, onChangeUserProfile] = useState({name: '', email: ''});
  const [userPhoto, onChangeUserPhoto] = useState({url: ''});
  const [isLoading, onChangeLoading] = React.useState(false);

  //Function To get user details such as username and email
  // Using FETCH Library
  useEffect(() => {
    onChangeLoading(true);
    const getProfile = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        let users = await response.json();
        onChangeUserProfile(userProfile => (userProfile = users));
        onChangeLoading(false);
      } catch {
        onChangeLoading(false);
        alert(error.message);
        navigation.goBack();
      }
    };

    //Call function to get UserProfile
    //when component loads
    getProfile();
  }, []);

  //Function To get user details such as PHOTO URL
  // Using AXIOS Library
  useEffect(() => {
    onChangeLoading(true);
    const getPhoto = async () => {
      //console.log(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const users = await axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(function (response) {
          onChangeUserPhoto(userPhoto => (userPhoto = response.data));
          onChangeLoading(false);
        })
        .catch(function (error) {
          onChangeLoading(false);
          alert(error.message);
          navigation.goBack();
        });
    };

    //Call function to get UserProfile
    //when component loads
    getPhoto();
  }, []);

  return (
    <View style={styles.UserStyles.userContainer}>
      {/* Display loader while making posts data request */}
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.UserStyles.mainView}>
        <View style={styles.UserStyles.photoView}>
          <TouchableOpacity
            onPress={() => {
              // pass user details such as photo url or post id
              // to save api calls
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
