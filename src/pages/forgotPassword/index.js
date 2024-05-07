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
import Icon from 'react-native-vector-icons/EvilIcons'
import {Colors, Fonts} from '../../../assets/theme.js';

export default function forgotPassword() {
    const navigation = useNavigation();

    const handleEmailSignIn = () =>{
      navigation.navigate('SignIn');
    };

    return (
        <View style={style.contaier}>
            <View style={style.buttonLoginContainer}>
                <TouchableOpacity style={style.backToLogin} onPress={handleEmailSignIn} >
                    <View style={style.buttonContent}>
                        <Image
                            source={require('../../../assets/backToLogin.png')}
                            style={style.backImage}
                            resizeMode='cover'
                        />
                        <Text style={style.loginButtonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.iconContainer}>
                <Icon name="lock" size={150} color="#333" style={style.lockIcon} />
            </View>
            {/*Texto de forgot */}
            <View style={style.containerTextForgot}>
                <Text style={style.titleTextForgot}>Forgot password?</Text>
                <Text style={style.subtitleTextPassword}>Enter your email below to reset your password</Text>
            </View>
            {/*Insert your email */}
            <View style={style.inputContainerEmail}>
                <TextInput type={'email'} style={style.inputText} placeholder="E-mail" placeholderTextColor="#555" />
            </View>

            {/*Botão de submit */}
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.signInButton}>
                    <View style={style.buttonContent}>
                        <Text style={style.buttonText}>Submit</Text>
                    </View>
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
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLoginContainer: {
        position: 'absolute',
        top: 50,
        marginLeft: '15%',
    },
    backToLogin: {
        width: 260,
        height: 50,
        backgroundColor: '#29D9D5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    backImage: {
        marginRight: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '60%',
    },
    //Texto forgot
    containerTextForgot: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    titleTextForgot: {
        fontSize: 32,
        color: '#555'
    },
    subtitleTextPassword: {
        marginTop: 15,
        fontSize: 16,
        color: '#555',
    },
    //Input Email
    inputContainerEmail: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        borderBottomColor: "#555",
        borderBottomWidth: "2",
        width: 260,
        marginTop: '5%',
        textAlign: 'center',
        fontSize: 16,
    },
    //Botão Login submit
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
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    //Logo final
    logoFinal: {
        alignItems: 'center',
        marginTop: '25%',
    },
})
