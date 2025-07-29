import { View, Text, Image, StyleSheet, Dimensions, StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../../assets/images/PausifyLogoWithoutBG.png'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import gearSymbol from '../../../assets/images/GearSymbol.png'
import SafeArea from '../../components/SafeArea'

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default function Home( { navigation } ) {

  return (
    <SafeArea>
        <View style = {{flex: 1}}>
                <View style = {styles.logoContainer}>
                    <Image source = {Logo} style = {styles.logoImage} />
                    <Text style = {styles.appName}>PAUSIFY</Text>
                </View>
                <View style = {styles.goalContainer}>
                    <View style = {styles.goalContainerBackGround}></View>
                    <GoalDisplay/>
                    <Button image = {gearSymbol} destinationScreen = 'Login' text = 'Gerenciar Metas'></Button>
                </View>
                <Footer/>
        </View>
    </SafeArea>
  )
}

function GoalDisplay(){
    return(
        <View style = {styles.goalDisplay}>
            <Text style = { [styles.goalText, styles.firstGoalText] }><Text style = {{color: '#3CB34E'}}>R$0</Text> BLOQUEADOS</Text>
            <Text style = { [styles.goalText, styles.secondGoalText] }>Nenhuma Meta</Text>
            <Text style = { [styles.goalText, styles.thirdGoalText] }>Ganhe tempo, viva melhor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appName: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        flexGrow: 2,
        marginTop: 30
    },
    logoImage: {
        height: 75,
        width: 75
    },
    goalContainer: {
        flexGrow: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 50,
        marginBottom: 75
    },
    goalDisplay: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 1000,
        width: windowW * 0.75,
        height: windowW * 0.75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    goalContainerBackGround: {
        position: 'absolute',
        width: windowW * 0.725,
        height: windowW * 0.725,
        backgroundColor: '#282828',
        borderRadius: '100%',
        marginBottom: windowW * 0.285
    },  
    goalText: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 2, height: 4},
        textShadowRadius: 4
    },
    firstGoalText: {
        fontSize: 16,
    },
    secondGoalText: {
        fontSize: 30
    },
    thirdGoalText: {
        fontSize: 10
    }
})