import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert,TextInput,SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {postVehicles} from '../api/vehicles';
import { getDbConnection, getTasks, insertQr } from '../utils/db';
import useAuth from '../hooks/useAuth';
import NetInfo from '@react-native-community/netinfo';
// import Navigation from './src/navigation/Navigation';

export default function ScaanQr(props) {
  const {navigation}=props
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [mileage,setMileage] = useState(10000);
  const location = useAuth().location;
  const userName = useAuth().auth;
  // console.log(mileage)
  // console.log(name)
  // console.log(location)
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });

  async function createQr(name){

    if(name === " "){
      Alert.alert(
        'Succes',
        'Error no hay un Id',[
          {
            text:'Ok',

          }
        ]
      )
    }
    try{
      // console.log(name);

      // console.log(db)
      // console.log(name)
      // insertQr(db,name);
      Alert.alert(
        'Succes',
        'Automovil ingresado Correctamente',[
          {
            text:'Ok',
            onPress: () => navigation.navigate('Menu'),
            style: "cancel"
          }
        ]
      )
    }catch(e){
      Alert.alert(
        'Succes',
        'Hubo un error',[
          {
            text:'Ok',
            onPress: () => console.log('Rolix',e),
            style: "cancel"
          }
        ]
      )
    }

  }
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
  const cargeVehicles =async (data) => {
    try {
      let hora = new Date().toLocaleString();
      console.log(userName,location,data,mileage,hora)
      // const db = getDbConnection();
      const response = await postVehicles(location,userName,mileage,hora,data);
      createQr(data);
      console.log(response);
    } catch (e){console.log('error al cargar vehiculo funcion cargeVehicles',e);}}
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // console.log(type);
    // console.log(typeof(data));
    cargeVehicles(data);


  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tomar Nuevamente Scanner'} onPress={() => setScanned(false)} />}
      <TextInput 
          style={styles.input} 
          placeholder="Ingrese Kilometraje"
          keyboardType="number-pad"
          autoCapitalize='none'
          // value={formik.values.username}
          onChangeText = {(text) =>setMileage(text) }    
      />
    </View>
    // {/* <View>

    // </View> */}

  );
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  },
  input:{
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:600,
    color:'black',
    padding: 10,
    borderColor: "black",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderWidth: 2,
    width: 300,
    height: 60,
  }
})