import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  contactTitle: {
    color: '#bada55',
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 20,
    paddingTop: 20,
  },
  phoneNumberText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  callIconView: {
    position: 'absolute',
    right: 20,
  },
  callIcon: {
    paddingLeft: 25,
    paddingTop: 40,
  },
  contactScreen: {
    backgroundColor: '#757575',
    flex: 1,
  },
  camPreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  reduxButton: {
    width: '90%',
    margin: 10,
    backgroundColor: 'red',
  },
});

export default styles;
