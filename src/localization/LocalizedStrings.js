import LocalizedStrings from 'react-native-localization';
import English from './English';
import Urdu from './Urdu';

const strings = new LocalizedStrings({
  en: English,
  ur: Urdu,
});

export default strings;
