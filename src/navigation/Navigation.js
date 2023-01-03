import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import NavigationQr from './NavigationQr';
const Stack = createNativeStackNavigator ();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{title:"", headerBackVisible: false, headerTransparent: true}} />
      <Stack.Screen name="NavigationQr" component={NavigationQr} options={{title:"", headerBackVisible: false, headerTransparent: true}}/>
    </Stack.Navigator>
  )
}