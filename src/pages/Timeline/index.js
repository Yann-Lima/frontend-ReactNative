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

export default function Timeline() {
    const route = useRoute(); // Hook para obter parâmetros da rota
    const { profileImage, username } = route.params; // Extrai o email dos parâmetros da rota
    const [likedPosts, setLikedPosts] = useState([]); // Estado para controlar os posts curtidos pelo usuário
    const [postLikes, setPostLikes] = useState({}); //Estado para armazenar o numero de likes

    // Função para manipular o like em um post
    const handleLike = (postId) => {
        // Verifica se o post já foi curtido
        const isLiked = likedPosts.includes(postId);

        // Atualiza a lista de posts curtidos
        setLikedPosts((prevLikedPosts) =>
            isLiked
                ? prevLikedPosts.filter((id) => id !== postId) // Remove o post da lista de curtidas se já foi curtido
                : [...prevLikedPosts, postId] // Adiciona o post à lista de curtidas se ainda não foi curtido
        );
        //atualiza o numero de likes do post
        setPostLikes((prevPostLikes) => ({
            ...prevPostLikes,
            [postId]: isLiked ? prevPostLikes[postId] - 1 : (prevPostLikes[postId] || 0) + 1,
        }));
    };

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
           
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

                                {/* Like */}
                                <TouchableOpacity onPress={() => handleLike(post.id)}>
                                    <Text style={styles.likeCount}>
                                        <Icon
                                            name={likedPosts.includes(post.id) ? "heart" : "hearto"}
                                            size={25}
                                            style={styles.likeStylePost}
                                        />
                                        {" "}{postLikes[post.id] || post.like}
                                    </Text>
                                </TouchableOpacity>

                                {/*Comment */}
                                <Text style={styles.commentCount}>
                                    <Icon3 name='comment' size={35} style={styles.commentStylePost} />
                                    {" "}{post.comentarios}
                                </Text>
                                <TouchableOpacity>

                                    {/*Group */}
                                    <Icon4 name='user-group' size={20} style={styles.userGroupStylePost} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
        </ScrollView>
        {/*Footer botão para todas as paginas */}
        <View style={styles.footerContainer}>

{/*Botao home */}
<View style={styles.footerIcon}>
    <Icon style={styles.iconStyle} name='home' size={30} />
</View>

{/*Botao chat */}
<View style={styles.footerIcon}>
    <Icon2 style={styles.iconStyle} name='chatbubble-outline' size={30} />
</View>

{/*Botao ranking */}
<View style={styles.footerIcon}>
    <Icon4 style={styles.iconStyle} name='ranking-star' size={30} />
</View>

{/*Botao setting */}
<View style={styles.footerIcon}>
    <Icon style={styles.iconStyle} name='setting' size={30} />
</View>
</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom:80, //espaço final para o footer
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
    //comentarios, likes e convidar grupo
    likesCommentsContainer: {
        flexDirection: 'row', //para alinhar os elementos horizontalmente
        marginLeft: 20,
        alignItems: 'center',
        marginTop: 5,
    },
    likeCount: {
        fontSize: 18,
        marginRight: 10, // espaçamento entre os elementos
    },
    contentContainer: {
        flex: 1,
        height: 350,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeStylePost: {
        color: Colors.primary,
    },
    commentStylePost: {
        color: Colors.primary,
    },
    commentCount: {
        fontSize: 18,
        marginRight: 10,// espaçamento entre os elementos
    },
    userGroupStylePost: {
        color: Colors.primary,
    },
    postContainer: {
        marginBottom: 20,
    },

    //footer botoes de troca de telas
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    // Estilo para os icones
    footerIcon: {
        alignItems: 'center',
        paddingRight: 30,
        
    },
    iconStyle:{
        color: Colors.primary,
    },
});