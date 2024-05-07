import { 
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
 } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {Colors, Fonts, ColorsLigth, ColorsDark} from '../../../assets/theme.js';

/*import LinearGradient from 'react-native-linear-gradient';*/

export default function Welcome() {
  const navigation = useNavigation();

  const handleEmailSignIn = () =>{
    navigation.navigate('SignIn');
  };
  
  return (
    <ImageBackground
    source={require('../../../assets/background_home.png')}
    style={style.background}
    resizeMode="cover"
    >

    <View style={style.overlay} />

    <View style={style.container}>

      <Animatable.View animation="flipInX" style={style.containerLogo}>
        <Image
        source={require('../../../assets/logo.png')}
        style={{width: '40%'}}
        resizeMode='contain'
        />
      </Animatable.View>

      <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
        <Text style={style.title}>Challenge Sport Club</Text>
        {/*Espaço para imagem do perfil */}
        <View style={style.profileImageContainer}>
          <Image
            source={require('../../../assets/man_profile.jpg')}
            style={style.profileImage}
            resizeMode='cover'
          />
        </View>
        <Text style={style.title}>Hello, user</Text>

        {/*Botões de Sign in*/}
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.signInButton}>
          <View style={style.buttonContent}>
              <Image 
                source={require('../../../assets/logoFacebook.png')}
                style={style.buttonImage}
                resizeMode='contain'
              />
              <Text style={style.buttonText}>Sign in with Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.signInButton}>
          <View style={style.buttonContent}>
            <Image 
                source={require('../../../assets/logoApple.png')}
                style={style.buttonImage}
                resizeMode='contain'
              />
              <Text style={style.buttonText}>Sign in with Apple</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.signInButton} onPress={handleEmailSignIn}>
          <View style={style.buttonContent}>
            <Image 
                source={require('../../../assets/logoEmail.png')}
                style={style.buttonImage}
                resizeMode='contain'
              />
              <Text style={style.buttonText}>Sign in with E-mail</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*Se não tiver conta - criar conta*/}
        <TouchableOpacity style={style.createButton}>
          <Text style={style.createText}>Create account</Text>
        </TouchableOpacity>
      </Animatable.View>

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
    backgroundColor: 'rgba(120, 203, 229, 0.65)',
  },
    container:{
      flex: 1,
    },
    containerLogo:{
      justifyContent: 'center',
      alignItems:'center',
      marginTop: '1%', //distacia da parte superior da tela
    },
    containerForm:{
      //flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize: 28,
      color: ColorsLigth.ligth5,
      fontFamily:'Arial', //alterar fonte
      textAlign: 'center',
    },
    //Imagem de perfil do usuario
    profileImageContainer:{
      margin: 10, //espaço entre o titulo e a imagem de perfil
      width: 120,
      height:120,
      borderRadius: 60,//imagem redonda
      overflow: 'hidden', //para cortar a imagem de forma redonda
      borderWidth: 2,
      borderColor: ColorsLigth.pimary,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    //Estilos para os botoes de sigin in
    buttonContainer: {
      marginTop: 30,
      alignItems: 'center',
    },
    signInButton:{
      width: 260,
      height: 50,
      backgroundColor: ColorsLigth.ligth7,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonContent:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonImage:{
      marginRight: 10,
    },
    buttonText:{
      color: ColorsLigth.ligth1,
      fontSize: 16,
    },
    //Criar conta
    createText:{
      fontSize: 16,
      color: ColorsLigth.ligth7,
      marginTop: 40,
    }
})