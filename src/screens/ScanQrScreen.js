import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {colors} from '../global/styles';
import {sizes} from '../global/size';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
export default function ScanQrScreen({navigation}) {
  const {navigate} = navigation;
  const onSuccess = e => {
    let index = e?.data.lastIndexOf('/');
    const id = Number.parseInt(e?.data.slice(++index));
    navigate('Home', {
      id,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} title="Scan Qr" />
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>LET SCAN QR IMAGE </Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Press To Scan</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
});
