import LocalizedStrings from 'react-native-localization';
import English from './English';
import Urdu from './Urdu';

//EXPORT STRINGS FOR LOCALIZATION
const strings = new LocalizedStrings({
  en: English,
  ur: Urdu,
});

export default strings;
