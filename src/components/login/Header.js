 import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import * as Font from 'expo-font';
export default function Header() {
  return (
    <View style={styles.bgColor}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.image}></Image>
        <Text style= {styles.headerText}>Bienvenido</Text>
        <Text style= {styles.headerTextP}>Ingresa Usuario y Contraseña</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    bgColor:{
        backgroundColor: '#eeb838',
        paddingTop: 60,
        paddingBottom: 60,
    },  
    container :{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f1ff00',
    },
    image:{
        width :250,
        height: 50,
    },
    headerText:{
        marginTop: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    headerTextP: {
        color: '#a4a4a4',
        fontWeight: 'bold',
        fontSize: 20,
    }
})