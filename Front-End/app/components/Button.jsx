import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react'
import gearSymbol from '../../assets/images/GearSymbol.png'

export default function Button(props){

    const nav = useNavigation()

    const ButtonStates = {
            buttonUnpressured: {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 250,
            height: '12%',
        },  
            buttonPressed: {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: 225,
            height: '10.8%',
            marginBottom: '1.5%',
        }
    }

    const buttonTextStates = {
        buttonPressed: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16
        },
        buttonUppressured: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20
        }
    }

    const buttonImageStates = {
        buttonPressed: {
            height: 25,
            width: 25
        },
        buttonUnpressured: {

        }
    }

    const [buttonState, setButtonState] = useState(ButtonStates.buttonUnpressured)
    const [textState, setTextState] = useState(buttonTextStates.buttonUppressured)
    const [imageState, setImageState] = useState(buttonImageStates.buttonUnpressured)

    // Issue 1
    // Arrumar Delay entre pressionar o botão, animar o botão e navegar para outra tela

    function handleSetButtonState(){
        const f = () => nav.navigate(props.destinationScreen, {Menssage: props.sucessMenssage})
        f()

        setButtonState(ButtonStates.buttonPressed)
        setTextState(buttonTextStates.buttonPressed)
        setImageState(buttonImageStates.buttonPressed)
        setTimeout(() => {setButtonState(ButtonStates.buttonUnpressured)
                          setTextState(buttonTextStates.buttonUppressured)
                          setImageState(buttonImageStates.buttonUnpressured)
        }, 100)
    }

    return (
      <View style = {buttonState} onTouchStart = {handleSetButtonState}>
        <LinearGradient
                colors={['#D812D4', '#720970']}
                style={styles.buttonBackground}
                locations = {[0, 0.93]}
        />
        <Image style = {imageState} source  = {props.image}/>
        <Text style = {textState}>Gerenciar Metas</Text>
      </View>
    )
}

const styles = StyleSheet.create({ 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    buttonBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 10
    }
})