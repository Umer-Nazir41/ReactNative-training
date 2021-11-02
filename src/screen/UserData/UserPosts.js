import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';
import styles from '../../styles/Index';
import {ActivityIndicator} from 'react-native-paper';

const UserPosts = ({navigation}) => {
  const [posts, onChangePosts] = React.useState([]);
  const [isLoading, onChangeLoading] = React.useState(false);

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
      <View style={styles.CommonStyles.container}>
        {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
      </View>
      <FlatList
        data={posts[0]}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4()}
      />
    </View>
  );
};

export default UserPosts;
