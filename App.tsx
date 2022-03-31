import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/Routes';


import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import theme from './src/Global/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [fontLoaded] = useFonts({ 
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  })

  if(!fontLoaded) {
    return <AppLoading />
  }

  return (
    
      <ThemeProvider theme={ theme }>
        <Routes />
      </ThemeProvider>
      
  );
}
