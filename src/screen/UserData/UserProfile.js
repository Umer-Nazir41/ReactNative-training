import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

//Full post detail with images, user details and post details
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {name: '', email: ''},
      userPhoto: {url: ''},
      isLoading: false,
    };

    //Bind function with class
    this.onChangeUserProfile = this.onChangeUserProfile.bind(this);
    this.onChangeUserPhoto = this.onChangeUserPhoto.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  //Getter/Setter
  onChangeUserProfile(value) {
    this.setState({userProfile: value});
  }

  onChangeUserPhoto(value) {
    this.setState({userPhoto: value});
  }
  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Function To get user details such as username and email
  // Using FETCH Library
  getProfile = async () => {
    this.onChangeLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.props.route.params.id}`,
      );
      let users = await response.json();
      this.onChangeUserProfile(users);
      this.onChangeLoading(false);
    } catch {
      this.onChangeLoading(false);
      alert(error.message);
      navigation.goBack();
    }
  };

  //Function To get user details such as PHOTO URL
  // Using AXIOS Library
  getPhoto = async () => {
    this.onChangeLoading(true);
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${this.props.route.params.id}`,
      )
      .then(response => {
        this.onChangeUserPhoto(response.data);
        this.onChangeLoading(false);
      })
      .catch(function (error) {
        this.onChangeLoading(false);
        alert(error.message);
      });
  };

  componentDidMount() {
    //Call function to get UserProfile/UserPhoto
    //when component loads
    this.getProfile();
    this.getPhoto();
  }

  render() {
    const {userPhoto, userProfile, isLoading} = this.state;

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
                this.props.navigation.navigate('UserDetails', {
                  id: this.props.route.params.id,
                  url: userPhoto.url,
                });
              }}>
              <Avatar
                rounded
                size="large"
                source={{
                  uri: `${userPhoto.url}`,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.UserStyles.userNameView}>
            <Text style={styles.UserStyles.userNameText}>
              {userProfile.name}
            </Text>
            <Text style={styles.UserStyles.userNameEmail}>
              {userProfile.email}
            </Text>
          </View>
        </View>
        <View style={styles.UserStyles.divider} />
        <View style={styles.UserStyles.textView}>
          <Text style={styles.UserStyles.titleText}>Title: </Text>
          <Text style={styles.UserStyles.titleText}>
            {this.props.route.params.title}
          </Text>
          <Text style={styles.UserStyles.titleText}>Body: </Text>
          <Text style={styles.UserStyles.emailText}>
            {this.props.route.params.body}
          </Text>
        </View>
      </View>
    );
  }
}

export default UserProfile;
