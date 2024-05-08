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
import Icon from 'react-native-vector-icons/EvilIcons'
import { Colors, Fonts, ColorsLigth, ColorsDark } from '../../../assets/theme.js';

export default function VerificationCode() {
    return (
        <View style={style.container}>
            <View style={style.buttonLoginContainer}>
                <TouchableOpacity style={style.backToLogin} >
                    <View style={style.buttonContent}>
                        <Image
                            source={require('../../../assets/backToLogin.png')}
                            style={style.backImage}
                            resizeMode='cover'
                        />
                        <Text style={style.loginButtonText}>Back to reset</Text>
                    </View>
                </TouchableOpacity>

                {/* Texto de inserir codigo abaixo */}
                <View style={style.containerTitleTextInsert}>
                    <Text style={style.textTitleInsert}>Insert your code below</Text>
                </View>

                {/* Caixas brancas com borda vermelha */}
                <View style={style.codeContainer}>
                    <View style={style.codeBox}></View>
                    <View style={style.codeBox}></View>
                    <View style={style.codeBox}></View>
                    <View style={style.codeBox}></View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorsLigth.ligth7,
    },
    buttonLoginContainer: {
        position: 'absolute',
        top: 50,
        marginLeft: '25%',
    },
    backToLogin: {
        width: 260,
        height: 50,
        backgroundColor: Colors.primary,
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
        color: ColorsLigth.ligth7,
        fontSize: 18,
    },
    backImage: {
        marginRight: 10,
    },

    // Titulo insert your code
    containerTitleTextInsert: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '45%',
    },
    textTitleInsert: {
        fontSize: 32,
        color: ColorsLigth.ligth3,
        textAlign: 'center',
    },

    // Caixas brancas com borda vermelha
    codeContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    codeBox: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        marginRight: 23,
    },
});
