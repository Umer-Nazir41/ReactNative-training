import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';

const UserPosts = ({navigation}) => {
  const [posts, onChangePosts] = React.useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log(response.data.length);
        onChangePosts(posts => [response.data]);
      })
      .catch(function (error) {
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
    <View style={styles.container}>
      <FlatList
        data={posts[0]}
        renderItem={renderItem}
        keyExtractor={() => uuid.v4()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default UserPosts;
