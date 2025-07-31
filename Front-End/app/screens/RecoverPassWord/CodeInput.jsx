import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import RoundedInput from "../../components/RoundedInput";
import KeySymbol from '../../../assets/images/KeySymbol.png'
import { useState } from "react";

export default function CodeInput(){

    const [otp, setOtp] = useState(['', '', '', ''])

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        // Move focus to the next box if the current one has a value
        if (value && index < newOtp.length - 1) {
            inputs[index + 1].focus();
        }
    }

    const inputs = []

    return(
        <SafeArea>
            <Header pageName = 'Inserir Código' backPage = 'Login'/>
            <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, paddingBottom: 75}}>
                <View style = {{borderWidth: 1, borderColor: 'white', borderRadius: 100, width: 90, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source = {KeySymbol} />
                </View>
                <Text style = {{color: 'white', fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginTop: 20, lineHeight:32}}>{'Insira o Código Recebido no Seu \n E-mail'}</Text>
                <View style = {{width: '100%', marginTop: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                     {otp.map((digit, index) => (
                        <TextInput
                            key = {index}
                            style = {styles.box}
                            maxLength = {1}
                            keyboardType = "numeric"
                            onChangeText = {(value) => handleOtpChange(value, index)}
                            onKeyPress = {(key) => {
                                if(index > 0 && digit && key.nativeEvent.key == 'Backspace'){
                                    inputs[index - 1].focus()
                                }
                            }}
                            onFocus = {() => {
                                if(!otp[index - 1] && index > 0){
                                    inputs[index - 1].focus()
                                }
                            }}
                            value = {digit}
                            ref = {(input) => {
                                inputs[index] = input;
                            }}
                        />
                    ))}
                </View>
                <View style = {{marginBottom: 35, marginTop: 35}}>
                    <Text style = {{color: 'rgba(255, 255, 255, 0.5)', fontSize: 11}}>Não Recebeu o Código? <Text style = {{color: 'white'}}>Enviar Novamente</Text></Text>
                </View>
                <Button  destinationScreen = 'PasswordChange' text = 'Confirmar Código'/>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textAlignVertical: 'center',
    },
})