import React from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet, StatusBar} from 'react-native';
import uuid from 'react-native-uuid';
import Item from '../../components/Card';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.onChangePosts = this.onChangePosts.bind(this);
  }

  onChangePosts(value) {
    this.setState({posts: value});
  }

  getPosts = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.onChangePosts([response.data]);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    //Destructuring State variables
    const {posts} = this.state;

    const renderItem = ({item}) => (
      <Item
        title={item.title}
        body={item.body}
        id={item.id}
        navigation={this.props.navigation}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default UserPosts;
