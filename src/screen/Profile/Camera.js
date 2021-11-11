import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../../components/Util';
import RNFS from 'react-native-fs';
import strings from '../../localization/LocalizedStrings';
import styles from '../../styles/Index';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const options = {quality: 0.5, base64: true};
      const data = await takePicture(options);
      console.log(data.uri);
      const name = data.uri.split('/').pop().split('.')[0];
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + `/${name}.jpg`;
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.ProfileStyles.camPreview}>
        <CustomButton
          title={strings.CAPTURE}
          color="#1eb900"
          onPressFunction={() => captureHandle()}
        />
      </RNCamera>
    </View>
  );
}

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
//   preview: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
// });

// import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {RNCamera} from 'react-native-camera';

// const Cam = () => {
//   takePicture = async function (camera) {
//     const options = {quality: 0.5, base64: true};
//     const data = await camera.takePictureAsync(options);
//     //  eslint-disable-next-line
//     console.log(data.uri);
//   };

//   return (
//     <View style={styles.container}>
//       <RNCamera
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.on}
//         androidCameraPermissionOptions={{
//           title: 'Permission to use camera',
//           message: 'We need your permission to use your camera',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//         androidRecordAudioPermissionOptions={{
//           title: 'Permission to use audio recording',
//           message: 'We need your permission to use your audio',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}>
//         {({camera, status}) => {
//           if (status !== 'READY') {
//             return (
//               <View
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'lightgreen',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Text>Waiting</Text>
//               </View>
//             );
//           }
//           return (
//             <View
//               style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
//               <TouchableOpacity
//                 onPress={() => takePicture(camera)}
//                 style={styles.capture}>
//                 <Text style={{fontSize: 14}}> SNAP </Text>
//               </TouchableOpacity>
//             </View>
//           );
//         }}
//       </RNCamera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// export default Cam;
