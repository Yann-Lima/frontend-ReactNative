import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { Colors, ColorsLigth } from '../../../assets/theme.js';
import { all_users_exemples } from '../../../assets/all_users_exemples.js'; //importar os dados desse arquivo para os posts
import Icon from 'react-native-vector-icons/AntDesign.js';
import Icon2 from 'react-native-vector-icons/Ionicons.js';
import Icon3 from 'react-native-vector-icons/EvilIcons.js';
import Icon4 from 'react-native-vector-icons/FontAwesome6.js';

export default function SettingsPage() {
  const navigation = useNavigation();
  const route = useRoute(); // Hook para obter parâmetros da rota
  const { username } = route.params;//pegar apenas o valor do email
  console.warn(username)

  //Funçõe

  //Função para determinar a imagem de perfil com base no email
  const getProfileImage = () => {
    if (username == 'Yann@') {
      return require('../../../assets/man_profile.jpg')
    } else if (username == 'Pedro@') {
      return require('../../../assets/boy_profile.jpg')
    } else if (username == 'Matheus@') {
      return require('../../../assets/man_profile2.jpg')
    } else if (username == 'Lea@') {
      return require('../../../assets/woman_profile.jpg')
    } else {
      //caso nenhum email ainda tenha sido escolhido
      return require('../../../assets/man_profile.jpg')
    }
  };

  //Função para gerar o numero aleatorio de seguidores
  const generateNumberOfFollowers = () => {
    const randomNumber = Math.floor(Math.random() * 2500); // Gera um número inteiro de 0 a 2500
    return randomNumber > 1000 ? numberWithCommas(randomNumber) : randomNumber.toString();
  };

  //Função auxiliar para adicionar virgulas a cada 3 digitos
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  //Começo do index
  return (
    <View style={styles.containerBackgroud}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.buttonBack}>
          <Icon style={styles.iconButtonBack} name='arrowleft' size={30} />
        </TouchableOpacity>
        <Text style={styles.titleSettings}>Settings</Text>
      </View>

      {/*Para o perfil do usuario */}
      <View style={styles.profileImageContainer}>
        <Image
          source={getProfileImage()}//fução para obter a imagem de perfil com base no email
          style={styles.profileImage}
          resizeMode='cover'
        />
        {/*texto abaixo da imagem do usuario */}
        <View style={styles.textNameUser}>
          <Text style={styles.textUser}>{username}</Text>
        </View>

        {/*Numeros de seguidores */}
        <View style={styles.numberOfFol}>
          <Text style={styles.numberOfFolText}>{generateNumberOfFollowers()} Followers</Text>
        </View>
      </View>

      {/*Caixa 1 night mode + notification + private account */}
      <View style={styles.containerOne}>
        <Text style={styles.containerText}>Night Mode</Text>
        <Text style={styles.containerText}>Notification</Text>
        <Text style={styles.containerText}>Private Account</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBackgroud: {
    flex: 1,
    backgroundColor: ColorsLigth.ligth7,
  },
  headerContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'flex-start',
    marginTop: '15%',
  },
  iconButtonBack: {
    color: Colors.primary,
  },
  titleSettings: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center', //centralizar o titulo Settings
    flex: 0.8, //centralizar o titulo Settings
    textAlign: 'center', //centralizar o titulo Settings
  },
  //Para a imagem de perfil
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 50, // Metade da largura/altura para tornar a imagem redonda
  },

  //para o texto abaixo da imagem de perfil
  textNameUser: {
    marginTop: 20,
  },
  textUser: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  //Para numero de seguidores
  numberOfFol: {
    alignSelf: 'center',
  },
  numberOfFolText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsLigth.ligth1,
  },

  //Estilo para o container 1
  containerOne: {
    width: 350,
    height: 150,
    backgroundColor: ColorsLigth.ligth4,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});