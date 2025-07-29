import { StyleSheet, View, Text, Dimensions, Image, TextInput} from "react-native";
import SafeArea from "../../components/SafeArea";
import { LinearGradient } from "expo-linear-gradient";
import Logo from '../../../assets/images/PausifyLogoWithoutBG.png'
import Button from "../../components/Button";
import InputPlace from "../../components/InputPlace";
import GoogleBox from "../../components/GoogleBox";
import { useNavigation } from "@react-navigation/native";


const windowH = Dimensions.get('window').height

export default function Login(){

    const nav = useNavigation()

    return(
        <SafeArea>
            <View style = {{alignItems: 'center', zIndex: 999}}>
                <View style = {styles.triangle}>
                    <View style = {styles.subTriangle}>
                        <LinearGradient
                                  colors={['#1C1C1C', '#666666']}
                                  style={styles.background}
                                  locations = {[1, 0]}
                        />
                    </View>
                </View>
                <View style = {styles.logoContainer}>
                    <Image source = {Logo} style = {styles.logoImage} />
                    <Text style = {styles.appName}>PAUSIFY</Text>
                </View>
                <View style = {styles.content}>
                    <View style = {styles.screenName}>
                        <Text style = {{color: 'white', fontSize: 24, fontWeight: 'semibold', marginBottom: 10}}>CADASTRO</Text>
                    </View>
                        <View style = {styles.input}>
                            <View>
                                <InputPlace inputName = 'Nome' inputType = 'text' inputPlaceholder = 'Digite seu nome Aqui'/>
                                <InputPlace inputName = 'E-mail' inputType = 'email-adress' inputPlaceholder = 'Digite seu E-mail Aqui'/>
                                <InputPlace inputName = 'Senha' inputType = 'text' inputPlaceholder = 'Digite sua senha aqui'/>
                            </View>
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button  destinationScreen = 'Home' text = 'Criar Conta'/>
                        </View>
                        <View style = {styles.otherOptions}>
                            <Text style = {{color: 'white', paddingBottom: 10, paddingTop: 15}}>Ou entre com</Text>
                            <GoogleBox/>
                            <View style = {styles.googleBox}></View>
                            <View style = {{flexDirection: 'row', justifyContent: 'center', columnGap: 5}} onTouchStart = {() => nav.navigate('Login')}>
                                <Text style = {{color: '#ABABAB'}}>Já tem uma conta?</Text>
                                <View style = {{paddingBottom: 10}}>
                                    <Text style = {{color: 'white', fontWeight: 'bold'}}>Entre Agora</Text>
                                </View>
                            </View>
                        </View>
                </View>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    triangle: {
        width: '100%',
        height: '400',
        position: 'absolute',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    subTriangle: {
        position: 'relative',
        width: '100%',
        height: 400,
        marginTop: 400,
        transform: [
            {rotate: '45deg'}
        ],
        zIndex: 1,
        backgroundColor: 'red'
    },
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    },
    content: {
        width: '100%',
        height: windowH - 120,
        marginTop: 120,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
        // zIndex: 999
    },
    logoImage: {
        height: 75,
        width: 75
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        flexGrow: 2,
        paddingTop: 20,
        position: 'absolute'
    },
    appName: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
    },
    input: {
        width: '100%',
        paddingTop: 20,
        flex: 4
    },
    buttonContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        paddingTop: 80,
        alignItems: 'center'
    },
    otherOptions: {
        width: '100%',
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    screenName: {
        width: '100%',
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})