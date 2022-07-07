import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SecondaryScreen from './app/screens/SecondaryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Details" component={SecondaryScreen} />
 </Stack.Navigator>
    </NavigationContainer>
  );  
}


