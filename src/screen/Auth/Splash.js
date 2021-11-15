import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';

// Login Screen
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };

    //Bind function with class
    this.onChangeAuth = this.onChangeAuth.bind(this);
  }

  // Getter/Setter
  onChangeAuth(value) {
    this.setState({authenticated: value});
  }

  // Firebase Auth
  __isTheUserAuthenticated = () => {
    let userTemp = auth().currentUser;
    if (userTemp) {
      //console.log(userTemp);
      this.onChangeAuth(true);
    } else {
      this.onChangeAuth(false);
    }
  };

  //Check if user is loggedIn or Not to show
  //user respective screen
  componentDidMount() {
    this.__isTheUserAuthenticated();
  }

  //Destructor
  componentWillUnmount() {}

  render() {
    const {authenticated} = this.state;
    return (
      <View>
        {/* Conditional rendring based on authenticated */}
        {authenticated
          ? this.props.navigation.navigate('Home')
          : this.props.navigation.navigate('SignIn')}
      </View>
    );
  }
}

export default Splash;
