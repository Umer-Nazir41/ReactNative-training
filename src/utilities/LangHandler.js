import AsyncStorage from '@react-native-async-storage/async-storage';

//SET LANGUAGE FOR LOCALIZATION IN ASYNC STORAGE
export const setLng = data => {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('language', data);
};

//GET LANGUAGE FROM ASYNC STORAGE FOR LOCALIZATION
export const getLng = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('language').then(data => {
      resolve(JSON.parse(data));
    });
  });
};
