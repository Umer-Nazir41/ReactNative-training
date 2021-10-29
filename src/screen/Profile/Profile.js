import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {increment, decrement} from '../../store/reducers/counterSlice';
import {connect} from 'react-redux';

//Profile Screen
class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
          <Button title="+" onPress={() => this.props.dispatch(increment())} />
        </View>

        <Text>{this.props.count}</Text>
        <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
          <Button title="-" onPress={() => this.props.dispatch(decrement())} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default Profile;
const mapStateToProps = state => ({
  count: state.counter.value,
});

export default connect(mapStateToProps)(Profile);
