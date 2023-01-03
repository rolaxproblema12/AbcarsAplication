import { View, Text, SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { getVehicles } from '../api/vehicles'
import { getDbConnection,getTasks } from '../utils/db'

export default function AutosAlmacen() {
  useEffect(() =>{
    (async() => { await loadVehicles()
    })();
  },[])
  const db = getDbConnection()
  const loadVehicles = async () =>{
    const vehicles = []
    try{
      getTasks(db).then((datos)=>{
        JSON.parse(datos)._array.map(name=>vehicles.push(name))
        console.log(vehicles.map(name => name.name))

        /*console.log( JSON.parse(datos)._array[0].name)*/})
      // const response = await getVehicles()
      // console.log(response)
    }catch(error){
      // console.error(error)
    }
  }
  return (
    <SafeAreaView>
        <Text>Estamos en autos almacen</Text>
    </SafeAreaView>

  )
}