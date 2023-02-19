import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/styles';
import {useEffect} from 'react';
export default function LoadingComponent({navigation}) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('Quiz');
      }, 1000);
    });

    return unsubscribe;
  }, [navigation]);
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
    textAlign: 'center',
  },
});
