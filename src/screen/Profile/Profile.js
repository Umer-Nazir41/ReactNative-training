import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../../styles/Index';

import counterSlice, {
  increment,
  decrement,
} from '../../store/reducer/counterSlice';

const Profile = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.CommonStyles.container}>
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

export default Profile;
