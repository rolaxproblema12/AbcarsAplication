import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert,TextInput,SafeAreaView,ScrollView } from 'react-native';
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
  const [chofer, setChofer] = useState('Abraham');
  const location = useAuth().location;
  const userName = useAuth().auth;
  const {estadoD} = useAuth();
  let wifi = "";
  NetInfo.fetch().then(state => {
    wifi = state.isConnected;
  });
  async function createQr(name, response){
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
      Alert.alert(
        'Succes',
        `'${response}'`,[
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
        estadoD(true);
        if(wifi!=="")
        {
          let response = await postVehicles(location,userName,mileage,hora,chofer,data);
          createQr(data, JSON.stringify(response));
          console.log('con wifi',response);
        }
        else{
          const db = getDbConnection();
          const dblocal= await insertQr(db,location,userName,mileage,hora,chofer,data)
          createQr(data,dblocal);
        }
    } catch (e){console.log('error al cargar vehiculo funcion cargeVehicles',e);}
  }
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
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
      {/* <View style={styles.containerQr}> */}
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tomar Nuevamente Scanner'} onPress={() => setScanned(false)} />}
      {/* </View> */}
      <View style={styles.containerInput}>
        <TextInput 
            style={styles.input} 
            placeholder="Ingrese Kilometraje"
            keyboardType="number-pad"
            autoCapitalize='none'
            // value={formik.values.username}
            onChangeText = {(text) =>setMileage(text) }    
        />
        <TextInput 
          style={styles.input} 
          placeholder="Ingrese Nombre Chofer"
          keyboardType="Text"
          autoCapitalize='none'
            // value={formik.values.username}
          onChangeText = {(text) =>setChofer(text) }    
        />
      </View>

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
  containerQr:{
    position: 'absolute'
  },  
  containerInput:{
    marginTop: 600
  },
  input:{
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:10,
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