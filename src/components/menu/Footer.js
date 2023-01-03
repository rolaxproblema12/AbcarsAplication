import { View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import React from 'react'

export default function Footer(props) {
  const {navigation} = props;
  // console.log(navigation)
  // console.log(props);
  const moveTo = () =>{
    navigation.navigate('AutosAlmacen');
  }
  return (
    <View style={styles.footerBg}>
      <TouchableWithoutFeedback  onPress={moveTo}>
        <Text style={styles.textFooter}>Autos Almacen</Text>
      </TouchableWithoutFeedback>
    </View>
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
  }
})