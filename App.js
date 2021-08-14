

import React from 'react';
import { StatusBar, } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Route from './src/components/Routes/index';
import VideoScreen from './src/screens/VideoScreen/index';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'black'
  },
};

const App = () => {


  return (

    <NavigationContainer theme={MyTheme} >
      {/* <HomeScreen /> */}
      <StatusBar barStyle="default" />
      <Route />
    </NavigationContainer>

  );
}
export default App;
