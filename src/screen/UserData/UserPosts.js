import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';
import styles from '../../styles/Index';
import {ActivityIndicator} from 'react-native-paper';
import Loader from 'react-native-modal-loader';

//User Posts
const UserPosts = ({navigation}) => {
  const [posts, onChangePosts] = React.useState([]);
  const [isLoading, onChangeLoading] = React.useState(false);

  //Function To call API to get
  //all posts using AXIO
  useEffect(() => {
    onChangeLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        //console.log(response.data.length);
        onChangePosts(posts => [response.data]);
        onChangeLoading(false);
      })
      .catch(function (error) {
        onChangeLoading(false);
        alert(error.message);
      });
  }, []);

  //Render Function to render One by One
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      body={item.body}
      id={item.id}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.CommonStyles.flatListContainer}>
      {/* Display loader while making posts data request */}
      <Loader loading={isLoading} color="#ff66be" />
      <FlatList
        data={posts[0]}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4()}
      />
    </View>
  );
};

export default UserPosts;
