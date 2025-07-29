import { View, Text, TextInput, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";
import Button from "../../components/Button";
import DropDownList from '../../components/DropDownList';
import InstagramSymbol from '../../../assets/images/instagramSymbol.png';
import RedditSymbol from '../../../assets/images/redditSymbol.png';
import PlusSymbol from '../../../assets/images/PlusSymbol.png';
import QuestionMark from '../../../assets/images/QuestionMark.png';

export default function NewGoal(){

    const measureType = [
        { label: 'Dia', value: 'Dia' },
        { label: 'Semana', value: 'Semana' }
    ];

    // Estrutura de dados temporária
    const hourQuantity = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
        { label: '12', value: 12 },
        { label: '13', value: 13 },
        { label: '14', value: 14 },
        { label: '15', value: 15 },
        { label: '16', value: 16 },
        { label: '17', value: 17 },
        { label: '18', value: 18 },
        { label: '19', value: 19 },
        { label: '20', value: 20 }
    ];

    // Placeholder para estrutura de dados verdadeira
    const dataInicial = [
        { label: 'Placehodlder', value: 'Placeholder' },
    ];

    // Placeholder para estrutura de dados verdadeira
    const dataFinal = [
        { label: 'Placeholder', value: 'Placeholder' },
    ];

    return(
        <SafeArea>
            <Header pageName = 'Criar Meta' backPage = 'Goals'/>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={style.scrollViewContent}>
                    <View style = {style.motivationMenssage}>
                        <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>Qual a sua motivação?</Text>
                        <TextInput style = {style.motivationInput}
                        placeholder = "Escreva sua motivação aqui..."
                        placeholderTextColor = 'white'
                        />
                    </View>
                    <View style = {style.moneyAmount}>
                        <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>Quantia</Text>
                        <TextInput style = {style.moneySum}
                        placeholder = "Quanto você quer guardar?"
                        placeholderTextColor = '#4A4848'
                        keyboardType = 'numeric'
                        />
                    </View>
                    <View style = {style.APPsChoosed}>
                        <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>Aplicativos Bloqueados</Text>
                        <BlockedAPP APPName = 'Instagram' APPLogo = {InstagramSymbol}/>
                        <BlockedAPP APPName = 'Reddit' APPLogo = {RedditSymbol}/>
                        <View style = {style.addContainer}>
                            <Image source = {PlusSymbol}/>
                            <Text style={{color: 'white', marginLeft: 5, fontSize: 12}}>adicionar</Text>
                        </View>
                    </View>
                    <View style = {style.goalTypeContainer}>
                        <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>Tipo de Meta</Text>
                        <View style = {{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style = {{flexDirection: 'row', alignItems: 'center', marginLeft: '6%', marginTop: 15, marginBottom: 15}}>
                                <View style = {style.radioButton}></View>
                                <Text style = {{color: 'rgba(255, 255, 255, 0.5)', fontSize: 12, marginLeft: 10}}>Por tempo médio de uso</Text>
                            </View>
                            <Pressable onPress = {() => alert('Esse é um teste!')}>
                                <Image style = {{marginRight: '6%', width: 20, height: 20}} source = {QuestionMark} />
                            </Pressable>
                        </View>
                    </View>
                    <View style = {style.goalParameters}>
                        <Text style = {{color: 'white', marginLeft: '6%', fontWeight: 600}}>Parâmetros da meta</Text>
                        <View style = {{marginTop: 20}}>
                            <Text style = {{color: 'white', marginLeft: '6%', fontSize: 10}}>Escolha a unidade de medida da meta</Text>
                            <DropDownList data = {measureType} placeholder = 'Selecione uma unidade de medida'/>
                        </View>
                        <View style = {{marginTop: 10}}>
                            <Text style = {{color: 'white', marginLeft: '6%', fontSize: 10}}>Quantidade de horas por semana</Text>
                            <DropDownList data = {hourQuantity} placeholder = 'Selecione a quantidade de horas'/>
                        </View>
                        <View style = {{marginTop: 10}}>
                            <Text style = {{color: 'white', marginLeft: '6%', fontSize: 10}}>Data inicial da meta</Text>
                            <DropDownList data = {dataInicial} placeholder = 'Selecione a data inicial' />
                        </View>
                        <View style = {{marginTop: 10, marginBottom: 15}}>
                            <Text style = {{color: 'white', marginLeft: '6%', fontSize: 10}}>Data final da meta</Text>
                            <DropDownList data = {dataFinal} placeholder = 'Selecione a data final' />
                        </View>
                    </View>
                    <View style = {style.buttonContainer}>
                        <Button destinationScreen = 'ConfirmationScreen' text = 'Continuar'/>
                    </View>
                </ScrollView>
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

const style = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 25 ,
    },
    APPsChoosed: {
        rowGap: 30,
    },
    motivationMenssage: {
        width: '100%',
        rowGap: 10,
        paddingBottom: 20
    },
    motivationInput: {
        alignSelf: 'center',
        borderColor: 'white',
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#282828',
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        fontSize: 12,
        paddingLeft: '2%',
        height: 200,
        textAlignVertical: 'top',
        fontWeight: '300',
    },
    moneySum: {
        borderBottomWidth: 1,
        borderColor: '#4A4848',
        width: '90%',
        alignSelf: 'center',
        marginBottom: '8%',
        color: 'white',
        textAlignVertical: 'bottom',
        textAlign : 'left',
    },
    addContainer: {
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor: 'purple', 
        borderRadius: 20, 
        width: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: '6%',
        marginBottom: 20,
        padding: 5
    },
    radioButton: {
        borderWidth: 6,
        borderColor: 'white',
        width: 20,
        height: 20,
        borderRadius: '100%',
        backgroundColor: '#282828'
    }
})