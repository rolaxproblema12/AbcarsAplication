import { View, Text,StyleSheet, SafeAreaView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Button from './buttons/Button'
import ButtonSalida from './buttons/ButtonSalida'


export default function Body(props) {
    const {navigation} = props;

    // let numVehicles = data.data.length  
return (
    <SafeAreaView>
      <View style= {styles.container}>
      <Button text={'Ingresar Automovil'} navigation={navigation}/>
      <ButtonSalida text={'Salida de Automovil'} navigation={navigation}/>
      <Image source={require('../../assets/FondoMenu.png')} style={styles.img}></Image>
      </View>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container:{
        // flexDirection: '',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    img: {
        // width:'100%', height:'100%',
        // top: 120,
        // left:  2,
        // right: 2,
        position: 'absolute',
        opacity:1
    },


})
