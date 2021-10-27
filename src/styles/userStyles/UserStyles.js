import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    flexGrow: 1,
  },
  mainView: {
    padding: 10,
    margin: 10,
    flex: 0.5,
    flexDirection: 'row',
  },
  photoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 10,
  },
  userNameEmail: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textView: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    paddingBottom: '5%',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 22,
  },
  emailText: {
    paddingBottom: '5%',
    margin: 10,
    fontSize: 18,
  },
});

export default styles;
