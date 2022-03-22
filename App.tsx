import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';

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

import { CarDetails } from './src/screens/CarDetails';
import { Schedule } from './src/screens/Schedule';
import { ScheduleDetails } from './src/screens/ScheduleDetails';
import { SchedulingCompleted } from './src/screens/SchedulingCompleted';


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
      <SchedulingCompleted />
    </ThemeProvider>
  );
}
