import React, {useState, useEffect} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Linking,
} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import Contacts from 'react-native-contacts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from 'react-native-modal-loader';

const ContactPage = () => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, onChangeLoading] = useState(false);

  useEffect(() => {
    onChangeLoading(true);
    const getContact = () => {
      if (Platform.OS === 'ios') {
        Contacts.getAll((err, contact) => {
          if (err) {
            onChangeLoading(false);
            Alert.alert('Error while fetching Contacts. Try again later!');
          }
          //console.log(contact);
          onChangeLoading(false);
          setContactList(contact);
        });
      } else if (Platform.OS === 'android') {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            Title: 'Contacts',
            message: 'Permission Required to display contacts',
          },
        ).then(() => {
          Contacts.getAll((err, contacts) => {
            contacts.sort(
              (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
            );
            //console.log('contacts -> ', contacts);

            if (err === 'denied') {
              onChangeLoading(false);
              alert('Permission to access contacts was denied');
              console.warn('Permission to access contacts was denied');
            } else {
              onChangeLoading(false);
              setContactList(contacts);
              //console.log('contacts', contacts[0].phoneNumbers[0].number);
            }
          });
        });
      }
    };

    //CALL FUNCTION TO GET USER PROFILE
    //AS SOON AS COMPONENT LOADS
    getContact();
  }, []);

  const renderItems = ({item}) => (
    <View style={{minHeight: 70, padding: 5, flexDirection: 'row'}}>
      <View>
        <Text
          style={{
            color: '#bada55',
            fontWeight: 'bold',
            fontSize: 26,
            paddingLeft: 20,
            paddingTop: 20,
          }}>
          {item.displayName}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          {item.phoneNumbers[0].number}
        </Text>
      </View>
      <View style={{position: 'absolute', right: 20}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${item.phoneNumbers[0].number}`);
          }}>
          <Icon name="call" style={{paddingLeft: 25, paddingTop: 40}} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor: '#757575', flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#2f363c'}} />

      <View>
        {/* DISPLAY LOADER WHILE MAKING DETAILS REQUEST */}
        <Loader loading={isLoading} color="#ff66be" />
        <FlatList
          data={contactList}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          // ListEmptyComponent={() => (
          //   <View
          //     style={{
          //       flex: 1,
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       marginTop: 50,
          //     }}>
          //     <Text
          //       style={{
          //         color: '#bad555',
          //         alignItems: 'center',
          //         justifyContent: 'center',
          //       }}>
          //       No Contacts Found
          //     </Text>
          //   </View>
          // )}
        />
      </View>
    </View>
  );
};
export default ContactPage;

// <SearchBar
//         placeholder="Type Here..."
//         clearIcon="cross"
//         onClear={() => {
//           setSearchVal('');
//         }}
//         onClear={() => {
//           console.log(searchVal);
//         }}
//         onChangeText={value => {
//           setSearchVal(value);
//         }}
//         value={searchVal}
//       />
