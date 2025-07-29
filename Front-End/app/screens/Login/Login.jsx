import { StyleSheet, View, Text, Dimensions, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from '../../../assets/images/PausifyLogoWithoutBG.png'
import Button from "../../components/Button";
import InputPlace from "../../components/InputPlace";
import GoogleBox from "../../components/GoogleBox";
import SafeArea from "../../components/SafeArea";

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
                        <Text style = {{color: 'white', fontSize: 24, fontWeight: 'semibold', marginBottom: 30}}>ENTRAR</Text>
                    </View>
                        <View style = {styles.input}>
                            <View>
                                <InputPlace inputName = 'E-mail' inputType = 'text' inputPlaceholder = 'Digite seu E-mail Aqui'/>
                                <InputPlace inputName = 'Senha' inputType = 'text' inputPlaceholder = 'Digite sua senha aqui'/>
                            </View>
                        </View>
                        <View style = {styles.recoverPassword} onTouchStart = {() => nav.navigate('Email')}>
                            <Text style = {{color: '#ABABAB'}}>Esqueceu sua senha?</Text>
                            <View>
                                <Text style = {{color: 'white', fontWeight: 'bold'}}>Clique aqui</Text>
                                <View></View>
                            </View>
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button  destinationScreen = 'Home' text = 'Entrar'/>
                        </View>
                        <View style = {styles.otherOptions}>
                            <Text style = {{color: 'white', paddingBottom: 10}}>Ou entre com</Text>
                            <GoogleBox/>
                            <View style = {styles.googleBox}></View>
                            <View style = {{flexDirection: 'row', justifyContent: 'center', columnGap: 5}} onTouchStart = {() => nav.navigate('SignIn')}>
                                <Text style = {{color: '#ABABAB'}}>Não tem uma conta?</Text>
                                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style = {{color: 'white', fontWeight: 'bold'}}>Crie Agora</Text>
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
        flex: 3
    },
    recoverPassword: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        flexDirection: 'row',
        columnGap: 5  
    },
    buttonContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
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