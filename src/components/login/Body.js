import { View, Text,SafeAreaView,TextInput,StyleSheet,Button, Image,ImageBackground} from 'react-native'
import React, { useState, useEffect } from 'react'
import Buttonn from './Buttonn'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { SelectList } from 'react-native-dropdown-select-list';
import { getTasks,getDbConnection } from '../../utils/db';
import { postVehicles } from '../../api/vehicles';


export default function Body(props) {
    const {navigation} = props;
    const [location,setLocation] = useState('Serdan')
    const [name,setName] = useState('roland')
    const [information,setInformation] = useState("")
    // useEffect(() =>{
    //     (async() => { await SummitInformation()
    //     })();
    // },[])
    
    const loadVehicles = async () =>
    {
      try{
        const db = getDbConnection();
        const data = await getTasks(db)
        setInformation(data)
      }catch(error){
        console.error(error)
      }
    }
    loadVehicles()
    const SummitInformation=async()=>{
        const datos = await information
        for(let data of datos){
            let sub = await postVehicles(data.name_location,data.name_guard,data.mileage,data.reception,data.vehicle_id)
            console.log(sub)
        }

    }


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: true,
            onsubmit :() => {

                console.log("Formulario enviado..")
            }
        
    });
    const data = [
        {key:'Zacatelco', value: 'Zacatelco'},
        {key:'Angelopolis', value:'Angelopolis'},
        {key:'Serdan',value:'Serdan'},
        {key:'Cholula',value:'Cholula'},
        {key:'15 de mayo',value:'15 de mayo'},
        {key:'Esteban de antuñano',value:'Esteban de antuñano'}

    ]
 
return (
    <SafeAreaView style= {styles.container}>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Correo"
                keyboardType="Email"
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText = {(text) =>{formik.setFieldValue('username',text), setName(text)}}    
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
            <SelectList
                style={styles.selectList}
                setSelected={setLocation}
                data={data}
                placeholder={'Selecciona una Ubicacion'}
                defaultOption={{key:'Serdan',value:'Serdan'}}
            />
            <Buttonn navigation={navigation} name={name} location ={location}/>

            <Text style={styles.text}>{formik.errors.username}</Text>
            <Text style={styles.text}>{formik.errors.password}</Text>
            <Button onPress={SummitInformation} title="Sincronizar"></Button>

        </View>
        <View>
            <Image style={styles.img} source={require('../../assets/footerLogin.png')}></Image>
        </View>
    </SafeAreaView>
)
}
function validationSchema(){
    return{
        username: Yup.string().required("El usuario es obligatorio"),
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
        marginTop:10,
        position: 'absolute',
        alignItems: 'center',
        
    },
    img:{

        // position: 'relative',
        // height:'100%',
        alignItems: 'flex-end',
        opacity: 1,
    },
    container: {
        alignItems: 'center',
        // marginTop: '30%',
        backgroundColor:'#FFFFFF',
        zIndex:1,
        paddingTop: '50%',
        paddingBottom:'50%',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        // zIndex:2,
        
    },
    input: {
        margin: 10,
        padding: 10,
        borderColor: "#E8E6E6",
        backgroundColor: "#E8E6E6",
        borderRadius: 25,
        width: 300,
        height: 60,
    },
    selectList:{
        backgroundColor:"#1057DB",
        color:"#1057DB"
        
    }
})