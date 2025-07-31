import { View, Image, Text, TextInput } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import RoundedInput from "../../components/RoundedInput";
import CircleLockerSymbol from '../../../assets/images/CircleLockerSymbol.png'

export default function Email(){
    return(
        <SafeArea>
            <Header pageName = 'Recuperar Senha' backPage = 'Login'/>
            <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, paddingBottom: 75}}>
                <View style = {{borderWidth: 1, borderColor: 'white', borderRadius: 100, width: 90, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source = {CircleLockerSymbol} />
                </View>
                <Text style = {{color: 'white', fontSize: 22, textAlign: 'center', fontWeight: 'bold', marginTop: 20, lineHeight: 32}}>{'Crie Uma Nova Senha Para sua \n a Conta'}</Text>
                <View style = {{width: '100%', marginTop: 15}}>
                    <RoundedInput placeholder = 'Crie Sua Senha' width = {'100%'}/>
                    <RoundedInput placeholder = 'Insira a Senha Novamente' width = {'100%'}/>
                </View>
                <Button  destinationScreen = 'SucessScreen' text = 'Confirmar' sucessMenssage = {'Senha Alterada com \n Sucesso'}/>
            </View>
        </SafeArea>
    )
}