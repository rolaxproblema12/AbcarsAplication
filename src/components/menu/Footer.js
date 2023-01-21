import { View, Text, StyleSheet, TouchableWithoutFeedback,SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import {getlocationVehicles}  from '../../api/vehicles';
import useAuth from '../../hooks/useAuth';

export default function Footer(props) {
  const {navigation} = props;
  const location = useAuth().location;
  console.log(location)
  const [numVehicles, setNumVehicles] = useState("");
  const loadVehicles = async () =>{
      try{
        const response = await getlocationVehicles(location);
        setNumVehicles (response.data.length);
        console.log(response.data.length)
      }catch(error){
        // console.error(error)
      }
    }
    loadVehicles()
    console.log(numVehicles)
  // console.log(navigation)
  // console.log(props);
  const moveTo = () =>{
    navigation.navigate('AutosAlmacen');
  }
  return (
    <SafeAreaView >
      <View>
        <Text style={styles.numVehicles}>{numVehicles}</Text>
      </View>
      <View style={styles.footerBg}>
        <TouchableWithoutFeedback  onPress={moveTo}>
          <Text style={styles.textFooter}>Autos Almacen</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  footerBg: {
    backgroundColor: 'black',
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop:'10%',
  },
  textFooter: {
    marginTop: 10,
    textAlign : 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
    numVehicles:{
    marginBottom: 50,
    fontSize: 50,
    textAlign: 'center',
        
    }
})