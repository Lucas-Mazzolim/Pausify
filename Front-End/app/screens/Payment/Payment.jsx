import { View, Text, ScrollView, StyleSheet, Image, TextInput} from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import SafeArea from '../../components/SafeArea'
import Caridade1 from '../../../assets/images/Caridade1.png'


export default function(){

    const instuicoes = [
        {
            id: 1,
            nome: 'Caridade 1',
            descricao: 'Esta instituição ajuda moradores em situação de rua',
            imagem: Caridade1,
        },
        {
            id: 2,
            nome: 'Caridade 2',
            descricao: 'Esta instituição ajuda cachorros em situação de rua',
            imagem: Caridade1,
        },
        {
            id: 3,
            nome: 'Caridade 3',
            descricao: 'Esta instituição luta pelos direitos das mulheres',
            imagem: Caridade1,
        }
    ]

    return(
        <SafeArea>
            <View style = {{flex: 1}}>
                <Header pageName = 'Pagamento' backPage = 'ConfirmationScreen'/>
                <ScrollView>
                    <View style = {{marginTop: 10, marginLeft: '6%'}}>
                        <Text style = {{color: 'white', fontWeight: 700, fontSize: 20}}>Destinatário</Text>
                        <Text style = {{color: 'white', fontSize: 10}}>Para onde o dinheiro vai se você perder?</Text>
                    </View>
                    <Text style = {{color: 'rgba(255, 255, 255, 0.6)', fontSize: 12, marginLeft: '6%', marginTop: 20}}>Instituições de Caridade:</Text>
                    <View style = {{rowGap: 20}}>
                        {instuicoes.map((instituicao) => (
                            <CharityORG nome = {instituicao.nome} logo = {instituicao.imagem} descricao = {instituicao.descricao} key = {instituicao.id}/>
                        ))}
                            <View style = {styles.moneyAmount}>
                            <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>Chave PIX personalizada</Text>
                            <TextInput style = {styles.moneySum}
                            placeholder = "Para quem o dinheiro se você perder"
                            placeholderTextColor = '#4A4848'
                            keyboardType = 'numeric'
                            />
                        </View>
                    </View>
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{color: 'white', marginLeft: '5.5%', alignSelf: 'flex-start'}}>Bloqueie Seu Dinheiro</Text>
                        <View style = {styles.paymentContainer}>
                            <View>
                                <Text style = {{fontWeight: 300}}>Chave PIX de Pagamento</Text>
                                <View style = {styles.PIXGenerator}>
                                    <Text style = {{paddingLeft: 5}}>XXXXXXXXXXXXXXXXXXXXXX</Text>
                                    <Text style = {{paddingRight: 10}}>Gerar</Text>
                                </View>
                            </View>
                            <View style = {styles.copyButtonPIX}  onTouchStart = {() => alert('Alerta 3')}>
                                <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 10}}>Copiar</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeArea>
    )
}

function CharityORG(props){
    return(
        <View style = {styles.charityORG}>
            <View style = {styles.photoContainer}>
                <Image style = {{justifyContent: 'center', alignItems:'center', marginLeft: 4}} source = {props.logo}/>
            </View>
            <View style = {styles.leftSideContainer}>
                <View style = {styles.leftSideTop}>
                    <Text style = {{marginLeft: 10, marginTop: 8, fontWeight: 'medium'}}>{props.nome}</Text>    
                    <Text style = {{marginLeft: 10, fontSize: 8, color: 'rgba(0, 0, 0, 0.6)'}}>{props.descricao}</Text>
                </View>   
                <View style = {styles.leftSideBottom}>
                    <View style = {{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', columnGap: 20}}>
                            <View style = {styles.cancelButton} onTouchStart = {() => alert('Alerta 1')}>
                                <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 8}}>Informações</Text>
                            </View>
                            <View style = {styles.confirmationButton}  onTouchStart = {() => alert('Alerta 2')}>
                                <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 8}}>Selecionar</Text>
                            </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    charityORG: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        height: 120,
        borderRadius: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    photoContainer: {
        borderRightWidth: 1,
        borderColor: 'black',
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    leftSideContainer: {
        flex: 7,
        flexDirection: 'column'
    },
    leftSideTop: {
        flex: 3,
        rowGap: 8
    },
    leftSideBottom: {
        borderTopWidth: 1,
        borderColor: 'black',
        flex: 1,
        justifyContent: 'center'
    },
    cancelButton: {
        backgroundColor: '#3F403F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        width: '32%',
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
    },
    confirmationButton: {
        borderRadius: 20,
        backgroundColor: '#3CB34E',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        paddingTop: 6,
        paddingBottom: 6,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
    paymentContainer: {
        borderWidth: 1, 
        borderColor: 'white', 
        width: '90%', 
        marginTop: 10, 
        borderRadius: 15, 
        backgroundColor: 'white', 
        height: '120', 
        marginBottom: 40,
        padding: 10
    },
    PIXGenerator: {
        borderWidth: 1,
        borderColor: 'black',
        height: '55%',
        width: '100%',
        borderRadius: 15,
        marginTop: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    copyButtonPIX: {
        borderRadius: 20,
        backgroundColor: '#3F403F',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        paddingTop: 6,
        paddingBottom: 6,
        marginRight: 10,
        alignSelf: 'flex-end'
    }
})