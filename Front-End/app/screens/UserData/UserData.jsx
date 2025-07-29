import { View, Image, Text, StyleSheet, TextInput} from 'react-native'
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'
import Button from '../../components/Button'
import UndefinedUser from '../../../assets/images/UndefinedUser.png'
import { useState } from 'react'

export default function UserData() {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [chavePIX, setChavePIX] = useState()


    function handleSetUserName(e){
        // Alguma validação aqui
        setUserName(e)
    }

    function handleSetEmail(e){
        // Alguma validação aqui
        setEmail(e)
    }

    function handleSetChavePix(e){
        // Alguma validação aqui
        setChavePIX(e)
        console.log(userName, email, chavePIX)
    }

    function handleSubmit(e){
        // Alguma lógica de validação aqui
        alert('Dados atualizados com sucesso!')
    }

    return (
        <SafeArea>
            <View style = {{flex: 1}}>
                <Header pageName = 'Dados' backPage = 'Perfil'/>
                <View style = {{flex: 1}}>
                    <View style = {styles.profilePhotoContainer}>
                        <Image style = {styles.profilePhoto} source = {UndefinedUser} />
                    </View>
                    <View style = {styles.formsContainer}>
                        <DataInput inputName = 'Nome Completo' placeholder = 'Escreva seu nome aqui...' handleChange = {handleSetUserName}/>
                        <DataInput inputName = 'E-mail' placeholder = 'Escreva seu E-mail aqui...' handleChange = {handleSetEmail} />
                        <DataInput inputName = 'Chave PIX' placeholder = 'Escreva sua chave PIX aqui...' handleChange = {handleSetChavePix} />
                    </View>
                    <View style = {styles.buttonContainer} onTouchStart = {handleSubmit}>
                        <Button destinationScreen = 'Perfil' text = 'Salvar'/>
                    </View>
                </View>
            </View>
        </SafeArea>
    )
}

function DataInput(props){
    return(
        <View style = {{justifyContent: 'center', alignItems: 'center', rowGap: '7%', marginTop: '4%'}}>
            <Text style = {styles.inputName}>{props.inputName}</Text>
            <TextInput style = {styles.dataInput}
                placeholder = {props.placeholder}
                placeholderTextColor = 'white'
                onChangeText = {(e) => props.handleChange(e)}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePhotoContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'white',
        // borderWidth: 1
    },
    buttonContainer: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },
    formsContainer: {
        flex: 12,
    },
    profilePhoto: {
        width: 150,
        height: 160,
        marginTop: 20
    },
    inputName: {
        alignSelf: 'flex-start',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '8.5%',
        fontWeight: 400,
    },
    dataInput: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        width: '88%',
        paddingLeft: '2.5%',
        color: 'white',
        fontWeight: 400,
        backgroundColor: '#282828',
    }
})