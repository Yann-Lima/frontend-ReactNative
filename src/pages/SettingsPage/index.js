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
  return (
    <Text>Voce esta na pagina de configuração</Text>
  )
}
