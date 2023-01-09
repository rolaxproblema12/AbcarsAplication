import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert,TextInput,SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {updateVehicles} from '../api/vehicles';
import { getDbConnection,updateVehiclesdb } from '../utils/db';
import NetInfo from '@react-native-community/netinfo';

export default function ScaanQrSalidaVehicle(props) {
  const {navigation} = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let wifi = false;
  NetInfo.fetch().then(state => {
    wifi = state.isConnected;
  });
  async function createQr(name){

    if(name === " "){
      Alert.alert(
        'Succes',
        'Automovil Ingresado Correctamente',[
          {
            text:'Ok',

          }
        ]
      )
    }
    try{

      Alert.alert(
        'Succes',
        'Automovil actualizado en transito Correctamente',[
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
  const cargeVehicles = async(value) => {
    try {
      if(wifi === true){
        const response = await updateVehicles(value);
        console.log(response)
      }
      else{
      const db = getDbConnection();
      updateVehiclesdb(db,value)

      }
      createQr(value);

      // console.log(response);

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