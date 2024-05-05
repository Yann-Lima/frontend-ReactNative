import { 
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
 } from 'react-native';
import React from 'react';
/*import LinearGradient from 'react-native-linear-gradient';*/

export default function Welcome() {
  return (
    <ImageBackground
    source={require('../../../assets/background_home.png')}
    style={style.background}
    resizeMode="cover"
    >

    <View style={style.overlay} />

    <View style={style.container}>
      <View style={style.containerLogo}>
        <Image
        source={require('../../../assets/logo.png')}
        style={{width: '100%'}}
        resizeMode='contain'
        />
      </View>

      <View style={style.containerForm}>
        <Text style={style.title}>Challenge Sport Club</Text>
        <Text style={style.text}>User</Text>

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(120, 203, 229, 0.65)', // Cor com 65% de opacidade
  },
    container:{
      flex: 1,
      //backgroundColor: '#38a69d',
    },
    containerLogo:{
      flex:2,
     // backgroundColor: 'red'
    },
    containerFrom:{
      flex:1,
    }
})