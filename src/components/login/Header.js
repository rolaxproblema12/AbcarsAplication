 import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import * as Font from 'expo-font';
export default function Header() {
  return (
    <View style={styles.bgColor}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.image}></Image>
        <Text  style= {styles.headerText}>¡BIENVENIDO!</Text>
        <Text style= {styles.headerTextP}>INGRESA USUARIO Y CONTRASEÑA</Text>
      </View>
      <View>
        <Image source={require("../../assets/footerLogin.png")} style={styles.imageAb}></Image>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    bgColor:{
        backgroundColor: '#ffffff',
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
        height: 150,
    },
    headerText:{
        // marginTop: 0,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 30,
    },
    headerTextP: {
        color: '#1057DB',
        fontWeight: 'bold',
        fontSize: 20,
    },
    imageAb:{
      marginTop:'-40%'
    }
})