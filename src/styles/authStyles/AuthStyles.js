import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderView: {
    alignSelf: 'center',
    position: 'absolute',
    top: 15,
  },
  headerText: {
    paddingTop: 22,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  InputField: {
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  forgetPassword: {
    height: 30,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    borderRadius: 50,
    borderColor: '#FF1493',
  },
});

export default styles;
