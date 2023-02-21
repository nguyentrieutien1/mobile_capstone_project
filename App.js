import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/MyStack';
import {Provider} from 'react-redux';
import {store} from './src/store';
import './ignoreWarnings';
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
