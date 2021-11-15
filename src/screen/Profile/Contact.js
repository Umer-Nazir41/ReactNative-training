import React from 'react';
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

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      isLoading: false,
    };

    //Bind function with class
    this.setContactList = this.setContactList.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
  }

  // Getter/Setter
  setContactList(value) {
    this.setState({contactList: value});
  }

  onChangeLoading(value) {
    this.setState({isLoading: value});
  }

  getContact() {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, contact) => {
        if (err) {
          this.onChangeLoading(false);
          Alert.alert('Error while fetching Contacts. Try again later!');
        }
        this.onChangeLoading(false);
        this.setContactList(contact);
      });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        Title: 'Contacts',
        message: 'Permission Required to display contacts',
      }).then(() => {
        Contacts.getAll()
          .then(contacts => {
            contacts.sort(
              (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
            );
            this.onChangeLoading(false);
            this.setContactList(contacts);
            console.log('contacts', contacts[0].phoneNumbers[0].number);
          })
          .catch(error => {
            this.onChangeLoading(false);
            alert('Permission to access contacts was denied', error);
            console.warn('Permission to access contacts was denied', error);
          });
      });
    }
  }

  componentDidMount() {
    this.onChangeLoading(true);
    this.getContact();
  }

  renderItems = ({item}) => (
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

  render() {
    const {contactList, isLoading} = this.state;

    return (
      <View style={{backgroundColor: '#757575', flex: 1}}>
        <SafeAreaView style={{backgroundColor: '#2f363c'}} />

        <View>
          {/* DISPLAY LOADER WHILE MAKING DETAILS REQUEST */}
          <Loader loading={isLoading} color="#ff66be" />
          <FlatList
            data={contactList}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
export default ContactPage;
