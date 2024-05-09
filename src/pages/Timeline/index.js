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

export default function Timeline() {
    const route = useRoute(); //Hook para obter parametros da rota
    const { profileImage, username } = route.params; //extrai o email dos parametros da rota

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <View style={styles.headerTimeline}>
                    <Text style={styles.textHelloUser}>Hello, <Text style={styles.textUser}>{username}</Text></Text>
                    <View style={styles.iconsContainer}>
                        <Icon2 name="search" size={25} style={styles.searchIcon} />

                        <View style={styles.notificationBadge}>
                            <Text style={styles.notificationText}>!</Text>
                        </View>
                        <Icon2 name="notifications" size={25} style={styles.notificationIcon} />
                        <Image
                            source={profileImage}//fução para obter a imagem de perfil com base no email
                            style={styles.profileImage}
                            resizeMode='cover'
                        />
                    </View>
                </View>

                {/*GRID PARA OS POST */}
                <View style={styles.containerPosts}>
                    {all_users_exemples.map(post => (
                        <View key={post.id} style={styles.postContainer}>
                            <View style={styles.userInfo}>
                                <Image source={post.imageProfile} style={styles.profileImagePost} />
                                <Text style={styles.userName}>{post.name}</Text>
                            </View>
                            <View style={styles.divider}></View>
                            <Image source={post.imagePost} style={styles.imagePost} />
                            <View style={styles.likesCommentsContainer}>
                                <Text style={styles.likeCount}>
                                    <Icon name="hearto" size={25} style={styles.likeStylePost} />
                                    {" "}{post.like}
                                </Text>
                                <Text>Comments: {post.comentarios}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    headerTimeline: {
        paddingTop: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
    },
    textHelloUser: {
        fontSize: 18,
        color: Colors.primary,
    },
    textUser: {
        fontWeight: 'bold',
        color: Colors.primary,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    searchIcon: {
        color: Colors.primary,
        marginRight: 10,
    },
    notificationIcon: {
        color: Colors.primary,
        marginRight: 10,
    },
    notificationBadge: {
        position: 'absolute',
        top: -5,
        right: 35,
        backgroundColor: 'red',
        borderRadius: 50,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, //para a exclamação ficar na frente de qualquer coisa
    },
    notificationText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 25,
        height: 25,
        borderRadius: 10,
    },
    postContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    //Grid para os posts
    containerPosts: {
        marginTop: 30,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileImagePost: {
        width: 45,
        height: 45,
        borderRadius: 20, // Para tornar a imagem redonda
        marginRight: 5,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
        marginLeft: 10, //texto ao lado da imagem com o nome do usuario
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        width: 350,
        alignSelf: 'center',//centraliza a linha horizontalmente
        marginBottom: 10, //espaçamento inferior para separar a linha do conteudo abaixo
    },
    imagePost: {
        width: 355,
        height: 190,
        borderRadius: 15,
        alignSelf: 'center',
    },
    likesCommentsContainer:{
        marginLeft: 20,
    },
    likeCount: {
        fontSize: 18,
    },
    contentContainer: {
        flex: 1,
        height: 350,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postContainer: {
        marginBottom: 20,
    },
});