import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flex: 1,
    flexGrow: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  wideButton: {
    width: '90%',
    margin: 10,
    backgroundColor: 'red',
  },
});

export default styles;
