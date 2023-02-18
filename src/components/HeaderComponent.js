import React from 'react';
import {Icon, Text} from '@rneui/base';
import {View, StyleSheet} from 'react-native';
import {colors} from '../global/styles';
export default function HeaderComponent(props) {
  return (
    <View style={styles.container}>
      <Icon iconStyle={styles.icon} name="undo" type="material" />
      <Text style={styles.title}>{props?.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.baseText,
    fontSize: 20,
    width: 100,
  },
  icon: {
    marginRight: 30,
    padding: 7,
    backgroundColor: colors.baseText,
    borderRadius: 100,
    color: colors.mainColor,
  },
});
