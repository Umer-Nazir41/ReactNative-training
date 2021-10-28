import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from '../../styles/Index';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.onChangeProfile = this.onChangeProfile.bind(this);
  }

  onChangeProfile(value) {
    this.setState({Profile: value});
  }

  getProfile = async () => {
    const users = await axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.route.params.id}`,
      )
      .then(response => {
        this.onChangeProfile(response.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    const {Profile} = this.state;

    return (
      <View style={styles.UserStyles.userContainer}>
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
