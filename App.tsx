import React from 'react';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Routes from './src/routes';

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <StatusBar backgroundColor="black" />
      <Routes />
    </>
  );
};

export default App;
