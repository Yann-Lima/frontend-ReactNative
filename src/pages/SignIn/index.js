import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function SignIn() {
  return (
    <ImageBackground
      source={require('../../../assets/backgroud_SignIn.png')}
      style={style.background}
      resizeMode="cover"
    >
      <View style={style.overlay} />
      <View style={[style.profileImageContainer, { marginTop: 120 }]}>
        <Image
          source={require('../../../assets/man_profile.jpg')}
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
              <TouchableOpacity style={style.signInButton}>
                {/*</View>onPress={handleEmailSignIn}*/}
                <View style={style.buttonContent}>
                  <Text style={style.buttonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/*Esqueceu a senha */}
            <View style={style.forgotPasswordContainer}>
              <Text style={style.forgotPasswordText}>Forgotten <Text style={style.passwordText}>your password?</Text></Text>
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
    borderColor: '#29D9D5',
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
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    color: '#000',
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
    borderColor: '#29D9D5',
    borderRadius: 15,
    borderWidth: 2,
  },
  line: {
    marginTop: 35,
    width: 300,
    height: 1,
    backgroundColor: '#555',
  },
  //Botão de login
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  signInButton: {
    width: 260,
    height: 50,
    backgroundColor: '#29D9D5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
  },
  //Estilo esqueceu a senha
  forgotPasswordContainer:{
    marginTop: 45,
    alignItems: 'center',
  },
  forgotPasswordText:{
    fontSize: 16,
    color: '#555',
  },
  passwordText:{
    color: '#29D9D5',
  },
})