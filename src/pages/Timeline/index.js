import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
} from 'react-native';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { Colors, ColorsLigth } from '../../../assets/theme.js';
import Icon from 'react-native-vector-icons/EvilIcons.js';
import Icon2 from 'react-native-vector-icons/Ionicons.js';

export default function Timeline() {
    const route = useRoute(); //Hook para obter parametros da rota
    const {profileImage, username} = route.params; //extrai o email dos parametros da rota

    return (
        <View style={styles.container}>
            <View style={styles.headerTimeline}>
                <Text style={styles.textHelloUser}>Hello, <Text style={styles.textUser}>{username}</Text></Text>
                <Icon name="search1" size={150} color="red" style={styles.searchIcon} />
                <Icon2 name="notifications" size={150} color="red" style={styles.notificationIcon} />
                <Image
                    source={profileImage}//fução para obter a imagem de perfil com base no email
                    style={styles.profileImage}
                    resizeMode='cover'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTimeline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
    },
    textHelloUser: {
        fontSize: 16,
        color: Colors.primary,
    },
    textUser: {
        fontWeight: 'bold',
        color: Colors.primary,
    },
    searchIcon: {
        marginLeft: 10,
    },
    notificationIcon: {
        marginLeft: 10,
    },
    profileImage: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
});