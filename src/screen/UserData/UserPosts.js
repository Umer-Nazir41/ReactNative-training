import React from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';
import styles from '../../styles/Index';
import {ActivityIndicator} from 'react-native-paper';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      posts: [],
    };
    this.onChangePosts = this.onChangePosts.bind(this);
  }

  onChangePosts(value) {
    this.setState({posts: value});
  }

  getPosts = async () => {
    this.setState({isLoading: true});
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.onChangePosts([response.data]);
        this.setState({isLoading: false});
      })
      .catch(function (error) {
        alert(error.message);
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    //Destructuring State variables
    const {posts, isLoading} = this.state;

    const renderItem = ({item}) => (
      <Item
        title={item.title}
        body={item.body}
        id={item.id}
        navigation={this.props.navigation}
      />
    );

    return (
      <View style={styles.commonStyles.flatListContainer}>
        <View style={styles.commonStyles.container}>
          {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
        <FlatList
          data={posts[0]}
          renderItem={renderItem}
          keyExtractor={() => uuid.v4()}
        />
      </View>
    );
  }
}

export default UserPosts;
