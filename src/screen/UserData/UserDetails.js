import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';

//User Details Page
class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      // Empty object to prevent app from crashing
      // while data is being fetched from api
      Profile: {
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
      },
    };

    //Bind function with class
    this.onChangeProfile = this.onChangeProfile.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  //Getter/Setter
  onChangeProfile(value) {
    this.setState({Profile: value});
  }
  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Function To get user details such as username and email
  // Using AXIOS Library
  getProfile = async () => {
    this.onChangeLoading(true);
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.route.params.id}`,
      )
      .then(response => {
        this.onChangeProfile(response.data);
        this.onChangeLoading(false);
      })
      .catch(function (error) {
        this.onChangeLoading(false);
        alert(error.message);
      });
  };

  componentDidMount() {
    //CALL FUNCTION TO GET USER PROFILE
    //AS SOON AS COMPONENT LOADS
    this.getProfile();
  }

  render() {
    const {Profile, isLoading} = this.state;

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
                uri: `${this.props.route.params.url}`,
              }}
            />
          </View>
          <View style={styles.UserStyles.userNameView}>
            <TouchableOpacity onPress={() => console.log('Hello')}>
              <Text style={styles.UserStyles.userNameText}>{Profile.name}</Text>
              <Text style={styles.UserStyles.emailText}>{Profile.email}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.UserStyles.divider} />
        <View style={styles.UserStyles.textView}>
          <Text style={styles.UserStyles.titleText}>
            Name: {Profile.name}
            {'\n'}
            Username: {Profile.username}
            {'\n'}
            Email : {Profile.email}
            {'\n'}
            Phone: {Profile.phone}
            {'\n'}
            Website: {Profile.website}
            {'\n'}
            Company: {(Profile.company.name, Profile.company.catchPhrase)}
            {'\n'}
          </Text>
        </View>
      </View>
    );
  }
}

export default UserDetails;
