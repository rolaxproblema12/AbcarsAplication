import { View, Text,SafeAreaView,TextInput,StyleSheet,Button, Image} from 'react-native'
import React from 'react'
import Buttonn from './Buttonn'
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function Body(props) {
    const {navigation} = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
            onsubmit :() => {
                console.log("Formulario enviado..")
            }
        
    });

return (
    <SafeAreaView style= {styles.container}>
        <View>
            <Image style={styles.img} source={require('../../assets/coche.png')}></Image>
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Correo"
                keyboardType="Email"
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText = {(text) => formik.setFieldValue('username',text)}    
            />
            <TextInput 
                style={styles.input}
 
                placeholder="Contraseña"
                keyboardType="Password"
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText = {(text) => formik.setFieldValue('password',text)}   
            />
            <Buttonn navigation={navigation}></Buttonn>

            <Text style={styles.text}>{formik.errors.username}</Text>
            <Text style={styles.text}>{formik.errors.password}</Text>
        </View>
    </SafeAreaView>
)
}
function validationSchema(){
    return{
        username: Yup.string().required("El usuario es obligatorio").email("El correo es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}
function initialValues(){
    return{
        username : "",
        password : ""
    }
}
const styles = StyleSheet.create({
    text:{
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    },  
    form: {
        position: 'absolute',
        alignItems: 'center',
    },
    img:{
        position: 'relative',
        opacity: 0.3,
    },
    container: {
        alignItems: 'center',
        marginTop: 40,
        zIndex:2,
        
    },
    input: {
        margin: 10 ,
        padding: 10,
        borderColor: "black",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        borderWidth: 2,
        width: 300,
        height: 60,
    }
})