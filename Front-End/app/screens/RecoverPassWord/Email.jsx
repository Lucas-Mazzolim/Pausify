import { View, Image, Text, TextInput } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import RoundedInput from "../../components/RoundedInput";
import LockerSymbol from '../../../assets/images/LockerSymbol.png'

export default function Email(){
    return(
        <SafeArea>
            <Header pageName = 'Recuperar Senha' backPage = 'Login'/>
            <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, paddingBottom: 75}}>
                <View style = {{borderWidth: 1, borderColor: 'white', borderRadius: 100, width: 90, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source = {LockerSymbol} />
                </View>
                <Text style = {{color: 'white', fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginTop: 20, lineHeight: 32}}>{'Insira seu E-mail Para Recuperar \n a Conta'}</Text>
                <View style = {{width: '100%', marginTop: 15}}>
                    <RoundedInput placeholder = 'Insira o E-mail aqui' width = {'100%'}/>
                </View>
                <Button  destinationScreen = 'CodeInput' text = 'Enviar Código'/>
            </View>
        </SafeArea>
    )
}