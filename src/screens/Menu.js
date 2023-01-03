import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/menu/Header'
import Body from '../components/menu/Body'
import Footer from '../components/menu/Footer'
// import Navigation from '../navigation/NavigationQr'
// import { NavigationContainer } from '@react-navigation/native'


export default function Menu(props) {
const {navigation} = props;
return (
    <SafeAreaView>
        <Header></Header>
        <Body navigation={navigation}></Body>
        <Footer navigation={navigation}></Footer>
    </SafeAreaView>
)
}