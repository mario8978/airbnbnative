import React, { useState, useEffect } from 'react';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="black" />
      <Routes />
    </>
  );
}

export default App;