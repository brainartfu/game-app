/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/Splash';
import Home from './screens/Home';
import Backgammon from './screens/Backgammon/Backgammon';
import Login from './screens/Auth/Login';
import GameHome from './screens/Backgammon/Home';
import Board from './screens/Backgammon/Board/Board';
import ProgressBar from './screens/Backgammon/Progress/Progress';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen 
            name='Home' 
            component={Home} 
          />
          <Stack.Screen name='Backgammon' component={Backgammon} />
          <Stack.Screen name='GameHome' component={GameHome} />
          <Stack.Screen name='Board' component={Board} />
          <Stack.Screen name='ProgressBar' component={ProgressBar} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};