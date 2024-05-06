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
      <View style={style.containerLogo}>
        <Image
        source={require('../../../assets/logo.png')}
        style={{width: '40%'}}
        resizeMode='contain'
        />
      </View>

      <View style={style.containerForm}>
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
              <Text style={style.buttonText}>Sign in with Email</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/*Se não tiver conta - criar conta*/}
        <TouchableOpacity style={style.createButton}>
          <Text style={style.createText}>Create account</Text>
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
    backgroundColor: 'rgba(120, 203, 229, 0.65)',
  },
    container:{
      flex: 1,
    },
    containerLogo:{
      justifyContent: 'flex-start',
      alignItems:'center',
      marginTop: '10%', //distacia da parte superior da tela
     //
    },
    containerForm:{
      //flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize: 28,
      color: '#f5f5f5',
      fontFamily:'Arial', //alterar fonte
      textAlign: 'center',
    },
    //Imagem de perfil do usuario
    profileImageContainer:{
      margin: 30, //espaço entre o titulo e a imagem de perfil
      width: 120,
      height:120,
      borderRadius: 60,//imagem redonda
      overflow: 'hidden', //para cortar a imagem de forma redonda
      borderWidth: 2,
      borderColor: '#29D9D5',
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
      backgroundColor: 'white',
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
      color: 'black',
      fontSize: 16,
    },
    //Criar conta
    createText:{
      fontSize: 16,
      color: '#fff',
      marginTop: 40,
    }
})