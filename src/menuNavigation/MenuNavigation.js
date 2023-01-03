import { View, Text } from 'react-native'
import React from 'react'
import NavigationQr from '../navigation/NavigationQr'
import { NavigationContainer } from '@react-navigation/native'

export default function MenuNavigation() {
  return (
    <NavigationContainer>
        <NavigationQr></NavigationQr>
    </NavigationContainer>
  )
}