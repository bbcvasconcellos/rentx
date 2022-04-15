import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { Schedule } from '../screens/Schedule'; 
import { CarDetails } from '../screens/CarDetails'; 
import { ScheduleDetails } from '../screens/ScheduleDetails'; 
import { SchedulingCompleted } from '../screens/SchedulingCompleted'; 

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator 
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name='Splash'
        component={Splash}
      />
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='CarDetails'
        component={CarDetails}
      />
      <Screen 
        name='Schedule'
        component={Schedule}
      />
      <Screen 
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
      <Screen 
        name='SchedulingCompleted'
        component={SchedulingCompleted}
      />
      <Screen 
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  )
}