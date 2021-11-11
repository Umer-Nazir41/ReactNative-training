import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/Index';
import MapView from 'react-native-maps';

const Contact = () => {
  //Khaadi store locations
  const markers = [
    {
      coordinate: {
        latitude: 31.516035154936237,
        longitude: 74.29593596449625,
      },
      title: 'Khaadi Allama Iqbal Town',
      description:
        'Askari Bank, 12, near Pak Block Allama Iqbal Town, Lahore, Punjab 54000, Pakistan',
    },
    {
      coordinate: {
        latitude: 31.46763040160472,
        longitude: 74.26539985544724,
      },
      title: 'Khaadi Emporium',
      description:
        'Shop No. F 37 & S 18 ; NISHAT EMPORIUM MALL, Abdul Haque Rd, Commercial Area Phase 2 Johar Town, Lahore, Punjab 54000, Pakistan',
    },
    {
      coordinate: {
        latitude: 31.465196624975448,
        longitude: 74.31521116942058,
      },
      title: 'Khaadi Link Road',
      description:
        '12 Model Town Link Rd, near Raja Sahib, Model Town, Lahore, Punjab 54000, Pakistan',
    },
    {
      coordinate: {
        latitude: 31.471619143175584,
        longitude: 74.35631852661074,
      },
      title: 'Khaadi Packages Mall',
      description:
        'Shop # 2078 Level 2, Packages Mall, Walton Road, Nishtar Town, Lahore, Punjab 54000, Pakistan',
    },
    {
      coordinate: {
        latitude: 31.472160843323074,
        longitude: 74.37555511312061,
      },
      title: 'Khaadi DHA',
      description:
        'Store No 204 & 205, Phase 3, Y Block, Sector Y DHA Phase 3, Lahore, Punjab 54792, Pakistan',
    },
    {
      coordinate: {
        latitude: 31.524119454530958,
        longitude: 74.38043037706088,
      },
      title: 'Khaadi Mall of Lahore',
      description:
        'Park Lane Tower, Shop No. 16-A, B & 18-A, Tufail Rd, Cantt, Lahore, Punjab 54810, Pakistan',
    },
  ];

  return (
    <View style={styles.CommonStyles.container}>
      {/* MAP VIEW */}
      <MapView
        style={styles.ProfileStyles.fullScreen}
        initialRegion={{
          latitude: 31.5341512166045,
          longitude: 74.35357759075175,
          latitudeDelta: 0.25,
          longitudeDelta: 0.15,
        }}>
        {/* MARK KHAADI STORES */}
        {markers.map((item, index) => {
          return (
            <MapView.Marker
              key={index}
              coordinate={item.coordinate}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </MapView>
    </View>
  );
};
export default Contact;
