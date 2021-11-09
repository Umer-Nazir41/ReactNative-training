import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

//SPLASH SCREEN (USED TO DECIDE TO ENTER HOME OR LOGIN PAGE)
const Splash = ({navigation}) => {
  const [authenticated, onChangeAuth] = useState(false);
  //const [initializing, setInitializing] = useState(true);
  //const [user, setUser] = useState();

  //CHECK IF USER AUTHENTICATED
  __isTheUserAuthenticated = () => {
    let userTemp = firebase.auth().currentUser;
    if (userTemp) {
      //console.log(userTemp);
      onChangeAuth(true);
    } else {
      onChangeAuth(false);
    }
  };

  //CHECK IF PAGE IS STILL LOADING
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  //GET LOGIN STATUS
  useEffect(() => {
    //const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    __isTheUserAuthenticated();
    //return subscriber; // unsubscribe on unmount
  }, []);

  // useEffect(() => {}, []);

  //IF PAGE IS STILL LOADING
  //if (initializing) return null;

  //RETURN HOME OR SIGNIN PAGE DEPENDING
  return (
    <View>
      {authenticated
        ? navigation.navigate('Home')
        : navigation.navigate('SignIn')}
    </View>
  );
};

export default Splash;
