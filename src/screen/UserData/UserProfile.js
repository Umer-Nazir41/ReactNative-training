import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {name: '', email: ''},
      userPhoto: {url: ''},
    };
    this.onChangeUserProfile = this.onChangeUserProfile.bind(this);
    this.onChangeUserPhoto = this.onChangeUserPhoto.bind(this);
  }

  onChangeUserProfile(value) {
    this.setState({userProfile: value});
  }

  onChangeUserPhoto(value) {
    this.setState({userPhoto: value});
  }

  getProfile = async () => {
    const users = await axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.route.params.id}`,
      )
      .then(response => {
        this.onChangeUserProfile(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  getPhoto = async () => {
    console.log(
      `https://jsonplaceholder.typicode.com/photos/${this.props.route.params.id}`,
    );
    const users = await axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${this.props.route.params.id}`,
      )
      .then(response => {
        this.onChangeUserPhoto(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getProfile();
    this.getPhoto();
  }

  render() {
    const {userPhoto, userProfile} = this.state;

    return (
      <View style={styles.UserStyles.userContainer}>
        <View style={styles.UserStyles.mainView}>
          <View style={styles.UserStyles.photoView}>
            <TouchableOpacity
              onPress={() => {
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
          <Text style={styles.UserStyles.titleText}>
            {this.props.route.params.title}
          </Text>
          <Text style={styles.UserStyles.emailText}>
            {this.props.route.params.body}
          </Text>
        </View>
      </View>
    );
  }
}

export default UserProfile;
