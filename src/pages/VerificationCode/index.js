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

export default function VerificationCode() {
    const navigation = useNavigation();
    const route = useRoute();
    const [codes, setCodes] = useState(['', '', '', '']);
    const email = route.params?.email || '';

    const navigateBack = () => {
        navigation.goBack();
    };

    const handleCodeChange = (index, value) => {
        //verifica se o valor é de um numero em cada caixa
        if (/^\d$/.test(value)) {
            const newCodes = [...codes];
            newCodes[index] = value;
            setCodes(newCodes);
            //verifica se o ultimo digito foi preenchido e oculta o teclado
            if (index == codes.length - 1) {
                Keyboard.dismiss();
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonLoginContainer}>
                <TouchableOpacity style={styles.backToLogin} onPress={navigateBack}>
                    <View style={styles.buttonContent}>
                        <Image
                            source={require('../../../assets/backToLogin.png')}
                            style={styles.backImage}
                            resizeMode='cover'
                        />
                        <Text style={styles.loginButtonText}>Back to reset</Text>
                    </View>
                </TouchableOpacity>

                {/* Texto de inserir codigo abaixo */}
                <View style={styles.containerTitleTextInsert}>
                    <Text style={styles.textTitleInsert}>Insert your code below</Text>
                </View>

                {/* Caixas brancas com borda vermelha */}
                <View style={styles.codeContainer}>
                    {codes.map((code, index) => (
                        <TextInput
                            key={index}
                            style={styles.codeBox}
                            onChangeText={(text) => handleCodeChange(index, text)}
                            value={code}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType={index == codes.length - 1 ? 'done' : 'next'}
                            onSubmitEditing={() => {
                                if (index == code.length - 1) {
                                    keyboard.dismiss();
                                }
                            }}
                        />
                    ))}
                </View>
                <View style={styles.containerEmailReceived}>
                    <Text style={styles.textEmailReceived}>Email <Text style={styles.emailColor}>{email}</Text> received a code, plase also check your spam folder.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInButton}>
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        borderColor: Colors.primary,
        borderRadius: 10,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 24,
    },
    //texto de email na caixa de spam
    containerEmailReceived: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    textEmailReceived: {
        textAlign: 'center',
        fontSize: 16,
        color: ColorsLigth.ligth5,
    },
    emailColor: {
        color: Colors.primary,
    },
    //button de submit
    buttonContainer:{
        position: 'absolute',
        top: 50,
        marginLeft: '25%',
    },
});
