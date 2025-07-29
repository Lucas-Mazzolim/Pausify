import { View, Image, Text, TextInput } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import RoundedInput from "../../components/RoundedInput";

export default function Email(){
    return(
        <SafeArea>
            <Header pageName = 'Recuperar Senha' backPage = 'Login'/>
            <View>
                <Image />
                <Text></Text>
                <RoundedInput/>
                <Button  destinationScreen = 'Login' text = 'Enviar Código'/>
            </View>
        </SafeArea>
    )
}