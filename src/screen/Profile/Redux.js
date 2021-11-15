import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {increment, decrement} from '../../store/reducers/counterSlice';
import {connect} from 'react-redux';
import styles from '../../styles/Index';

//Profile Screen
class Redux extends React.Component {
  render() {
    return (
      <View style={styles.CommonStyles.container}>
        <View style={styles.CommonStyles.wideButton}>
          <Button title="+" onPress={() => this.props.dispatch(increment())} />
        </View>

        <Text>{this.props.count}</Text>
        <View style={styles.CommonStyles.wideButton}>
          <Button title="-" onPress={() => this.props.dispatch(decrement())} />
        </View>
      </View>
    );
  }
}

// export default Profile;
const mapStateToProps = state => ({
  count: state.counter.value,
});

export default connect(mapStateToProps)(Redux);
