import {View, Text} from 'react-native';
import React from 'react';

export default function HomeScreen({route, navigation}) {
  const {id} = route?.params;
  console.log(id);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
