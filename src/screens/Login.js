import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/login/Header'
import Body from '../components/login/Body'

export default function Login(props) {
  const {navigation} = props;


  return (
    <SafeAreaView>
        <Header></Header> 
        <Body navigation = {navigation}></Body>
    </SafeAreaView>
  )
}