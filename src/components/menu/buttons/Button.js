import { View, Text,StyleSheet,Image,TouchableWithoutFeedback} from 'react-native'
import React from 'react'

export default function Button(props) {
const {text,navigation} = props;
// console.log(image)
const oppenCamera = () => {
    navigation.navigate('ScaanQr')

}
    return (
    <TouchableWithoutFeedback  onPress={oppenCamera}>
        <View style ={styles.buttonBg}>
            <View style={styles.contedo}>
                <Image source={require('../../../assets/IconoEntrada.png')} style={styles.img}></Image>
                <Text style={styles.textButton}>{text}</Text>
            </View>
            <View>
                <Image source={require('../../../assets/capturarQR.png')}></Image>
            </View>
        </View>
    </TouchableWithoutFeedback>
)
}
const styles = StyleSheet.create({
    buttonBg: {
        // backgroundColor: 'black',
        zIndex:2,
        backgroundColor: 'white',
        flexDirection:'row',
        marginTop:30,
        marginBottom: 10,
        marginEnd:10,
        marginLeft: 10,
        height: 120,
        width: 290,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomStartRadius: 40,
        borderTopEndRadius:40,
        // borderColor: "black",
        // borderWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textButton:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:15,
        textAlign: 'center',
    },
    img: {
        // position: 'absolute',
        height: 60,
        width: 140,
        opacity:1
    },
    contedo:{
        marginRight: 15,
    }
})