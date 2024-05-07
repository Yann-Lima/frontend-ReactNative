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
import Icon from 'react-native-vector-icons/FontAwesome'

export default function forgotPassword() {
    return (
        <View style={style.contaier}>
            <View style={style.buttonLoginContainer}>
                <TouchableOpacity style={style.backToLogin}>
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
                <Icon name="lock" size={150} color="#333" style={style.lockIcon}/>
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
    iconContainer:{
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    
})
