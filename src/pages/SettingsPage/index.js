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
  Switch,
  Button,
  FlatList,
  Animated
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [languageListPosition] = useState(new Animated.Value(200)); // Posição inicial da lista (fora da tela)

  //Estado local para cada um dos switch buttons
  const [nightModeEnabled, setNightModeEnabled] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [privateAccountEnabled, setPrivateAccountEnabled] = useState(false);

  //Estado pora controlar a visibilidade da lista de idiomas
  const [showLanguageList, setShowLanguageList] = useState(false);
  //console.warn(username)

  //Funções

  //para os buttons stwich
  useEffect(() => {
    loadSwitchStates();
  }, []);

  // Carregar os estados dos switches do armazenamento persistente
  const loadSwitchStates = async () => {
    try {
      const nightModeState = await AsyncStorage.getItem('nightModeState');
      const notificationState = await AsyncStorage.getItem('notificationState');
      const privateAccountState = await AsyncStorage.getItem('privateAccountState');

      if (nightModeState !== null) {
        setNightModeEnabled(nightModeState === 'true');
      }
      if (notificationState !== null) {
        setNotificationEnabled(notificationState === 'true');
      }
      if (privateAccountState !== null) {
        setPrivateAccountEnabled(privateAccountState === 'true');
      }
    } catch (error) {
      console.error('Erro ao carregar os estados dos switches:', error);
    }
  };

  // Salvar os estados dos switches no armazenamento persistente
  const saveSwitchState = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString());
    } catch (error) {
      console.error('Erro ao salvar o estado do switch:', error);
    }
  };


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

  //Função para alterar a visibilidade da lista de idiomas
  const toggleLanguageList = () => {
    Animated.timing(
      languageListPosition,
      {
        toValue: showLanguageList ? 200 : 0, // Mostrar ou ocultar a lista
        duration: 300, // Duração da animação em milissegundos
        useNativeDriver: true,
      }
    ).start();
  
    setShowLanguageList(!showLanguageList);
  };

  //Lista de idiomas
  const language = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Portuguese' },
    { id: 3, name: 'Spanish' },
  ];

  //Renderização da lista de idiomas
  const renderLanguageList = () => {
    return (
      <Animated.View style={[styles.languageContainer, { transform: [{ translateY: languageListPosition }] }]}>
      <FlatList
        data={language}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectLanguage(item)}>
            <Text style={styles.languageItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </Animated.View>
    );
  };

  //Função para selecionar um idioma
  const selectLanguage = (language) => {
    //logica futura pora mudar o idoma do aplicativo
    console.warn('Idioma selecionado:', language);
    toggleLanguageList();
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
        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#6523B1'}>
            <View style={styles.circle} backgroundColor={'#6523B1'}>
              <Icon2 name='moon' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerText}>Night Mode</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity onPress={() => setNightModeEnabled(!nightModeEnabled)}>
              <Switch
                style={styles.switchButton}
                value={nightModeEnabled}
                onValueChange={(value) => {
                  setNightModeEnabled(value);
                  saveSwitchState('nightModeState', value);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#1EB0C0'}>
            <View style={styles.circle} backgroundColor={'#1EB0C0'}>
              <Icon2 name='notifications' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerText}>Notification</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity onPress={() => setNotificationEnabled(!notificationEnabled)}>
              <Switch
                style={styles.switchButton}
                value={notificationEnabled}
                onValueChange={(value) => {
                  setNotificationEnabled(value);
                  saveSwitchState('notificationState', value);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#DF9F23'}>
            <View style={styles.circle} backgroundColor={'#DF9F23'}>
              <Icon4 name='shield' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerTextPrivate}>Private Account</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity onPress={() => setPrivateAccountEnabled(!privateAccountEnabled)}>
              <Switch
                style={styles.switchButtonPrivate}
                value={privateAccountEnabled}
                onValueChange={(value) => {
                  setPrivateAccountEnabled(value);
                  saveSwitchState('privateAccountState', value);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Caixa 2 Language + Security + Groups */}
      <View style={styles.containerTwo}>
        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#D56170'}>
            <View style={styles.circle} backgroundColor={'#D56170'}>
              <Icon2 name='language' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerText}>Language</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity style={styles.buttonStyleLang} onPress={toggleLanguageList}>
              <Icon name='right' style={styles.iconButtonStyle} size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Renderização da lista de idiomas */}
        {showLanguageList && renderLanguageList()}

        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#6523B1'}>
            <View style={styles.circle} backgroundColor={'#6523B1'}>
              <Icon4 name='lock' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerText}>Security</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity style={styles.buttonStyleSecur}>
              <Icon name='right' style={styles.iconButtonSecur} size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerItem}>
          <View style={styles.containerCircle} backgroundColor={'#29D9D5'}>
            <View style={styles.circle} backgroundColor={'#29D9D5'}>
              <Icon2 name='people' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerTextPrivate}>Social</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity style={styles.buttonStyleSocial}>
              <Icon name='right' style={styles.iconButtonSocial} size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Caixa 3 trocar de conta */}
      <View style={styles.containerThree}>
        <View style={styles.containerItemThree}>
          <View style={styles.containerCircle} backgroundColor={'#D56170'}>
            <View style={styles.circle} backgroundColor={'#D56170'}>
              <Icon4 name='power-off' size={20} color='white' style={styles.icon} />
            </View>
          </View>
          <Text style={styles.containerTextChange}>Change Account</Text>
          <View style={styles.containerRight}>
            <TouchableOpacity style={styles.buttonStyleLang}>
              <Icon name='right' style={styles.iconButtonStyle} size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Direitos Autorais */}
      <Text style={styles.direitosAutorais}>Direitos autorais © 2024 Surfapp™. Todos os direitos reservados.</Text>
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
    backgroundColor: ColorsLigth.ligth6,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 5,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 1,
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsLigth.ligth1,
    marginLeft: 10,
    marginRight: 130,
  },
  containerTextPrivate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsLigth.ligth1,
    marginLeft: 10,
  },
  switchButtonPrivate: {
    marginLeft: 90,
  },

  //Estilo para container 2
  containerTwo: {
    width: 350,
    height: 150,
    backgroundColor: ColorsLigth.ligth6,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 5,
  },
  iconButtonStyle: {
    color: ColorsLigth.ligth1
  },
  buttonStyleLang: {
    marginLeft: 35,
  },
  buttonStyleSecur: {
    marginLeft: 48,
  },
  buttonStyleSocial: {
    marginLeft: 200,
  },

  //Estilo para container 3
  containerThree: {
    width: 350,
    height: 60,
    backgroundColor: ColorsLigth.ligth6,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 5,
  },
  containerTextChange: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorsLigth.ligth1,
    marginLeft: 10,
    marginRight: 130,
    textAlign: 'center',
  },
  containerItemThree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  //direitos autorais
  direitosAutorais: {
    textAlign: 'center',
    fontSize: 14,
    color: '#7b7b7b',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },

  // Estilos para a lista de idiomas
  languageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: ColorsLigth.ligth6,
    borderTopWidth: 1,
    borderTopColor: ColorsLigth.ligth4,
    maxHeight: 200, // Altura máxima da lista
    overflow: 'hidden', // Esconder qualquer conteúdo além da altura máxima
  },
  languageList: {
    flexGrow: 1,
  },
});