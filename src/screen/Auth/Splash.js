import React, {useEffect, useState} from 'react';
import {View, I18nManager} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import {getLng} from '../../utilties/LangHandler';
import strings from '../../localization/LocalizedStrings';

//SPLASH SCREEN (USED TO DECIDE TO ENTER HOME OR LOGIN PAGE)
const Splash = ({navigation}) => {
  const [authenticated, onChangeAuth] = useState(false);
  //const [show, setShow] = useState(false);
  //const [lang, setLang] = useState('en');

  const selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      if (lngData === 'en') {
        I18nManager.forceRTL(false);
      } else if (lngData === 'ur') {
        I18nManager.forceRTL(true);
      }

      strings.setLanguage(lngData);
    }
    //setLang(lngData);
    console.log('selected Language data==>>>', lngData);
  };

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

  //GET LOGIN STATUS
  useEffect(async () => {
    await selectedLng();
    await __isTheUserAuthenticated();
  }, []);

  return (
    <View>
      {authenticated
        ? navigation.navigate('Home')
        : navigation.navigate('SignIn', {lang})}
    </View>
  );
};

export default Splash;
