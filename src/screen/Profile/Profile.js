import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import counterSlice, {
  increment,
  decrement,
} from '../../store/reducer/counterSlice';

const Profile = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
        <Button
          title="+"
          onPress={() => {
            dispatch(increment());
          }}
        />
      </View>

      <Text>{count}</Text>
      <View style={[{width: '90%', margin: 10, backgroundColor: 'red'}]}>
        <Button
          title="-"
          onPress={() => {
            dispatch(decrement());
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
