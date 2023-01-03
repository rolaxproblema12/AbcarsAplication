import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Button(props) {
    // console.log(props)
    const {navigation} = props;
    const gotoPage = () =>{
        navigation.navigate("NavigationQr");
        console.log("hello");
    }
return (
    <TouchableOpacity onPress={gotoPage} style= {styles.button}>
        <Text style={styles.text}>Ingresar</Text>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    button: {
        zIndex: 1,
        backgroundColor: 'black',
        height:50,
        width:150,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent : 'center',
    },
    text:{
        color: 'white',
        fontSize: 15
    }
})