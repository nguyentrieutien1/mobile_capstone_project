import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingComponent from '../components/LoadingComponent';
import AuthStack from './AuthStack';
import {StatusBar} from 'react-native';
import QuizScreen from '../screens/QuizScreen';
import ScanQrScreen from '../screens/ScanQrScreen';
import HomeScreen from '../screens/HomeScreen';
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
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="ScanQr" component={ScanQrScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
}
