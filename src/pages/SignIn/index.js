import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {Colors, Fonts, ColorsLigth, ColorsDark} from '../../../assets/theme.js';


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState(''); //Para armazenar o email

  const handleForgotPassword = ()=>{
    navigation.navigate('ForgotPassword');
  };

  const handleTimeline = (username, profileImage) =>{
    navigation.navigate('Timeline', {
      profileImage: getProfileImage(),//passando imagem do perfil 
      username: email //passando email
    });
  };

  //Função para determinar a imagem de perfil com base no email
  const getProfileImage = () =>{
    if(email == 'Yann@'){
      return require('../../../assets/man_profile.jpg')
    } else if (email == 'Pedro@'){
      return require('../../../assets/boy_profile.jpg')
    } else if (email == 'Matheus@'){
      return require('../../../assets/man_profile2.jpg')
    } else if (email == 'Lea@'){
      return require('../../../assets/woman_profile.jpg')
    } else {
      //caso nenhum email ainda tenha sido escolhido
      return  require('../../../assets/man_profile.jpg')
    }
  };

  //Começo das View
  return (
    <ImageBackground
      source={require('../../../assets/backgroud_SignIn.png')}
      style={style.background}
      resizeMode="cover"
    >
      <View style={style.overlay} />
      <View style={[style.profileImageContainer, { marginTop: 120 }]}>
        <Image
          source={getProfileImage()}//fução para obter a imagem de perfil
          style={style.profileImage}
          resizeMode='cover'
        />
      </View>

      {/*Caixa branca */}
      <View style={style.container}>
        <View style={style.whiteBox}>
          <View>
            <Text style={style.welcomeText}>Welcome</Text>

            {/*Input de Email */}
            <View style={[style.inputContainer]}>
              <View style={style.inputContent}>
                <TextInput
                  style={style.input}
                  placeholder='E-mail'
                  placeholderTextColor="#29D9D5"
                  onChangeText={text => setEmail(text)} //atualiza o estado do email
                />
              </View>

              {/*Input de Password */}
              <View style={style.inputContainer}>
                <View style={style.inputContent}>
                  <TextInput
                    style={style.input}
                    placeholder='Password'
                    placeholderTextColor="#29D9D5"
                    secureTextEntry={true} //ocultar senha
                  />
                </View>
              </View>
            </View>
            <View style={style.line} />

            {/*Botao de Login */}
            <View style={style.buttonContainer}>
              <TouchableOpacity style={style.signInButton} onPress={handleTimeline}>

                {/*</View>onPress={handleEmailSignIn}*/}
                <View style={style.buttonContent}>
                  <Text style={style.buttonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/*Esqueceu a senha */}
            <View style={style.forgotPasswordContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={style.forgotPasswordText}>Forgotten <Text style={style.passwordText}>your password?</Text></Text>
              </TouchableOpacity>
            </View>

            {/*Logo final */}
            <View style={style.logoFinal}>
              <Image
                source={require('../../../assets/logo_welcome.png')}
                resizeMode='contain'
                style={style.logoImage}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(120, 203, 229, 0.65)',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  //Imagem de perfil do usuario
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,//imagem redonda
    overflow: 'hidden', //para cortar a imagem de forma redonda
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  //Estilo para a caixa branca
  whiteBox: {
    width: '100%',
    height: '100%',
    backgroundColor: ColorsLigth.ligth7,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    color: ColorsLigth.ligth1,
    textAlign: 'center',
    marginTop: '15%',
  },
  //Estilos inputs
  inputContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    width: 260,
    height: 50,
    fontSize: 16,
    borderColor: Colors.primary,
    borderRadius: 15,
    borderWidth: 2,
  },
  line: {
    marginTop: 35,
    width: 300,
    height: 1,
    backgroundColor: ColorsLigth.ligth3,
  },
  //Botão de login
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  signInButton: {
    width: 260,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: ColorsLigth.ligth7,
    fontSize: 16,
  },
  //Estilo esqueceu a senha
  forgotPasswordContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: ColorsLigth.ligth3,
  },
  passwordText: {
    color: Colors.primary,
  },
  logoFinal: {
    alignItems: 'center',
    marginTop: '5%',
  }
})