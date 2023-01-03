import { View, Text,StyleSheet, SafeAreaView,Image } from 'react-native'
import React from 'react'
import Button from './buttons/Button'

export default function Body(props) {
    const {navigation} = props;
return (
    <SafeAreaView style= {styles.container}>
        <Image style={styles.img} source={require('../../assets/abcars.png')}></Image>
        <Button text={'Ingresar Automovil'} navigation= {navigation}/>
        <Button text={'Salida de Automovil'} navigation={navigation}/>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    img: {
        width:'100%', height:'100%',
        top: 120,
        left:  2,
        right: 2,
        position: 'absolute',
        opacity:0.2
    }
})
