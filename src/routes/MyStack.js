import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingComponent from '../components/LoadingComponent';
import AuthStack from './AuthStack';
import {StatusBar} from 'react-native';
export default function MyStack() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        showHideTransition={'fade'}
        hidden={true}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loading" component={LoadingComponent} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </>
  );
}
