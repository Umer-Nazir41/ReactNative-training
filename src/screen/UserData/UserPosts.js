import React from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';
import styles from '../../styles/Index';
import {ActivityIndicator} from 'react-native-paper';
import Loader from 'react-native-modal-loader';

//User Posts
class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      posts: [],
    };

    //Bind function with class
    this.onChangePosts = this.onChangePosts.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  //Getter / Setter
  onChangePosts(value) {
    this.setState({posts: value});
  }
  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  //Function To call API to get
  //all posts using AXIOS
  getPosts = async () => {
    this.onChangeLoading(true);
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.onChangePosts([response.data]);
        this.onChangeLoading(false);
      })
      .catch(function (error) {
        alert(error.message);
        this.onChangeLoading(false);
      });
  };

  componentDidMount() {
    //Call function to get POSTS
    //when component loads
    this.getPosts();
  }

  render() {
    //Destructuring State variables
    const {posts, isLoading} = this.state;

    //Render Function to render One by One
    const renderItem = ({item}) => (
      <Item
        title={item.title}
        body={item.body}
        id={item.id}
        navigation={this.props.navigation}
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
  }
}

export default UserPosts;
