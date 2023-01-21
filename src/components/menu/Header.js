import { View, Text,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function Header() {
return (
    <View style={styles.bgColor}>
        <View style= {styles.containerImg}>
            <Image source={require('../../assets/ABCARSLOGO1.png')} style={styles.img}></Image>
        </View>
        <View style={styles.containerText}>
            {/* <Text style = {styles.textHeader}>Bienvenido</Text> */}
            <Text style ={styles.textUsuario}>Usuario</Text>
        </View>

    </View>
)
}
const styles = StyleSheet.create({
    bgColor: {
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent : 'center',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        zIndex:2
    },
    containerImg:{
        // position: 'relative',
        margin: 20
    },
    img: {
        width:250,
        height:50,
        opacity:1
    },
    containerText:{
        // position: 'absolute',
        alignItems: 'center',
        justifyContent : 'center',
    },
    textHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 20
    },
    textUsuario: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 25,
    },
})