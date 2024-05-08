import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Colors, ColorsLigth } from '../../../assets/theme.js';

export default function VerificationCode() {
    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
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
                    <View style={styles.codeBox}></View>
                    <View style={styles.codeBox}></View>
                    <View style={styles.codeBox}></View>
                    <View style={styles.codeBox}></View>
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
        borderColor: 'red',
        borderRadius: 10,
        marginRight: 23,
    },
});
