import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {useEffect} from 'react';
export default function LoadingComponent({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth', {screen: 'SignIn'});
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Updating View, Please hold on few minutes
      </Text>
      <ActivityIndicator size="large" color={colors.mainColor} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.textColor,
    marginBottom: 30,
  },
});
