import { View, Text, SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { getVehicles } from '../api/vehicles'
import { getDbConnection,getTasks } from '../utils/db'

export default function AutosAlmacen() {
  const [information,setInformation] = useState()
  // useEffect(() =>{
  //   (async() => { await loadVehicles()
  //   })();
  // },[])
  const loadVehicles = async () =>
  {
    try{
      const db = getDbConnection();
      const data = await getTasks(db);
      console.log(data);
      // console.log(vehicles);
        // /*console.log( JSON.parse(datos)._array[0].name)*/})
      // const response = await getVehicles()
      // console.log(response)
    }catch(error){
      // console.error(error)
    }
  }
  loadVehicles();
  return (
    <SafeAreaView>
        <Text>Estamos en autos almacen</Text>
    </SafeAreaView>

  )
}