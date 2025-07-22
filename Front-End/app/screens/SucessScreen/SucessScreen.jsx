import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import SafeArea from "../../components/SafeArea";
import SucessSymbol from '../../../assets/images/SucessSymbol.png'
import { useNavigation } from "@react-navigation/native";

export default function SucessScreen({ route }){

    const { Menssage } = route.params
    const nav = useNavigation()

    setTimeout(() => {nav.navigate('Home')}, 1500)

    return(
        <SafeArea>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', rowGap: '5%'}}>
                <Image style = {style.sucessSymbol} source = {SucessSymbol}/>
                <Text style = {style.sucessText}>{Menssage}</Text>
            </View>
        </SafeArea>
    )
}

const style = StyleSheet.create({
    sucessSymbol: {

    },
    sucessText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center'
    }
})