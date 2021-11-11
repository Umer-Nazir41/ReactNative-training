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
import {Icon} from 'react-native-elements';
import Contacts from 'react-native-contacts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from 'react-native-modal-loader';
import styles from '../../styles/Index';

const ContactPage = ({navigation}) => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, onChangeLoading] = useState(false);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = () => {
    onChangeLoading(true);
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
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        Title: 'Contacts',
        message: 'Permission Required to display contacts',
      }).then(() => {
        Contacts.getAll((err, contacts) => {
          contacts.sort(
            (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
          );
          if (err === 'denied') {
            onChangeLoading(false);
            alert('Permission to access contacts was denied');
            console.warn('Permission to access contacts was denied');
          } else {
            onChangeLoading(false);
            setContactList(contacts);
          }
        });
      });
    }
  };

  const renderItems = ({item}) => (
    <View style={{minHeight: 70, padding: 5, flexDirection: 'row'}}>
      <View>
        <Text style={styles.ProfileStyles.contactTitle}>
          {item.displayName}
        </Text>
        <Text style={styles.ProfileStyles.phoneNumberText}>
          {item.phoneNumbers[0].number}
        </Text>
      </View>
      <View style={styles.ProfileStyles.callIconView}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${item.phoneNumbers[0].number}`);
          }}>
          <Icon name="call" style={styles.ProfileStyles.callIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.ProfileStyles.contactScreen}>
      <View>
        {/* DISPLAY LOADER WHILE MAKING DETAILS REQUEST */}
        <Loader loading={isLoading} color="#ff66be" />
        <FlatList
          data={contactList}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default ContactPage;
