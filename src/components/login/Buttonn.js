import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

export default function Button(props) {
    // console.log(props)
    const {login,locationUser}= useAuth();
    const {navigation,name,location} = props;
    const gotoPage = () =>{
        login(name)
        locationUser(location)
        // console.log(useAuth())
        navigation.navigate("NavigationQr");
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