import { View, Text,StyleSheet, SafeAreaView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Button from './buttons/Button'
import ButtonSalida from './buttons/ButtonSalida'
import { getVehicles } from '../../api/vehicles'
export default function Body(props) {
    const {navigation} = props;
    const [numVehicles, setNumVehicles] = useState("");
    const loadVehicles = async () =>{
        try{
          const response = await getVehicles()
          console.log(response.data.length)
          setNumVehicles (response.data.length);
        }catch(error){
          // console.error(error)
        }
      }
      loadVehicles()
    // let numVehicles = data.data.length  
return (
    <SafeAreaView>
      <View style= {styles.container}>
      <Button text={'Ingresar Automovil'} navigation={navigation}/>
        <ButtonSalida text={'Salida de Automovil'} navigation={navigation}/>
      </View>
      <View style={styles.containerContador}>
        <Text style={styles.numVehicles}>{numVehicles}</Text>
      </View>

    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    img: {
        width:'100%', height:'100%',
        top: 120,
        left:  2,
        right: 2,
        position: 'absolute',
        opacity:0.2
    },
    numVehicles:{
      position: 'relative',
        fontSize: 50,
        textAlign: 'center',
        
    }

})
