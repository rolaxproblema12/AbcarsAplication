import { View, Text,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function Header() {
return (
    <View style={styles.bgColor}>
        <View style= {styles.containerImg}>
            <Image source={require('../../assets/carro-deportivo.png')} style={styles.img}></Image>
        </View>
        <View style={styles.containerText}>
            <Text style = {styles.textHeader}>Bienvenido</Text>
            <Text style ={styles.textUsuario}>Usuario</Text>
        </View>

    </View>
)
}
const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: '#eeb838',
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent : 'center',
    },
    containerImg:{
        position: 'relative',
    },
    img: {
        width:250,
        height:150,
        opacity:0.08
    },
    containerText:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent : 'center',
    },
    textHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 80
    },
    textUsuario: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 25,
    },
})