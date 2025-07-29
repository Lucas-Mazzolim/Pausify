import { View, Text, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import SafeArea from "../../components/SafeArea"
import Button from "../../components/Button"
import Header from "../../components/Header"
import GearSymbol from '../../../assets/images/GearSymbol.png'
import InstagramSymbol from '../../../assets/images/instagramSymbol.png'
import RedditSymbol from '../../../assets/images/redditSymbol.png'

export default function ConfirmationScreen(){

    const nav = useNavigation()

    return(
        <SafeArea>
            <View style = {{flex: 1}}>
                <Header pageName = 'Confirmação' backPage = 'NewGoal'/>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <View style = {styles.confirmationContainer}>
                        <View style = {{padding: 25}}>
                            <Text style = {{color: 'white', textAlign: 'center', fontSize: 13}}>Você perderá <Text style = {{color: 'red'}}>R$60</Text> se passar, em média, mais de 4 horas por dia nos seguintes aplicativos</Text>
                        </View>
                        <View style = {{rowGap: 40}}>
                            <BlockedAPP APPName = 'Instagram' APPLogo = {InstagramSymbol}/>
                            <BlockedAPP APPName = 'Reddit' APPLogo = {RedditSymbol}/>
                        </View>
                        <View>
                            <Text style = {{color: 'white', marginLeft: 25, marginTop: 20}}>Perda Máxima: <Text style = {{color: 'red'}}>R$60</Text></Text>
                            <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 55, marginTop: 20}}>
                                <View style = {styles.cancelButton} onTouchStart = {() => nav.navigate('NewGoal')}>
                                    <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 12}}>Voltar</Text>
                                </View>
                                <View style = {styles.confirmationButton} onTouchStart = {() => nav.navigate('Payment')}>
                                    <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 12}}>Continuar</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeArea>
    )
}

function BlockedAPP(props){
    return(
        <View style = {{flexDirection: 'row', columnGap: 10, marginLeft: '6%', alignItems: 'center'}}>
            <Image source = {props.APPLogo}/>
            <Text style = {{color: 'white'}}>{props.APPName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    confirmationContainer: {
        borderWidth: 1,
        borderColor: 'white',
        height: '45%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#282828'
    },
    cancelButton: {
        backgroundColor: 'rgba(255, 0, 0, 0.25)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        width: '25%',
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
    },
    confirmationButton: {
        borderRadius: 20,
        backgroundColor: 'rgba(0, 255, 0, 0.25)',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        paddingTop: 6,
        paddingBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }
})