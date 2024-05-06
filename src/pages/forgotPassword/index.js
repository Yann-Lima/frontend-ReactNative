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

export default function forgotPassword() {
    return (
        <View style={style.buttonLoginContainer}>
            <TouchableOpacity style={style.backToLogin}>
                <Image
                    source={require('../../../assets/backToLogin.png')}
                    style={style.backImage}
                    resizeMode='cover'
                />
                <Text style={style.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    buttonLoginContainer:{
        alignItems: 'center',
        paddingTop: 50,
    },
    backToLogin:{
        width: 260,
        height: 50,
        backgroundColor: '#29D9D5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    loginButtonText:{
        color: '#fff',
    }
})
