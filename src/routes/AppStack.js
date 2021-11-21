import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen, DetailScreen } from 'screens';
import { Routes } from 'config';

import { appOptions } from './ScreenOptions';

const AppStack = createStackNavigator();

export const AppNavigator = () => (
  <AppStack.Navigator initialRoute={Routes.HOME} headerMode="screen">
    <AppStack.Screen
      component={HomeScreen}
      name={Routes.HOME}
      options={{
        ...appOptions,
        title: 'Home',
      }}
    />
    <AppStack.Screen
      component={DetailScreen}
      name={Routes.DETAILT}
      options={{
        ...appOptions,
        title: 'Detailt',
      }}
    />
  </AppStack.Navigator>
);