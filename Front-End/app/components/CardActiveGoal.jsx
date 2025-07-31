import { View, Text, StyleSheet, Image} from 'react-native'
import InstagramSymbol from '../../assets/images/instagramSymbol.png';

export default function(){
    return(
        <View style = {styles.Card}>
            <View>
                <Text style = {{color: 'white', marginLeft: '6%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Dinheiro Bloqueado</Text>
                <Text style = {{color: 'red', marginLeft: '6%', fontSize: 24, fontWeight: 'bold'}}>R$50,00</Text>
            </View>
            <View>
                <Text style = {{color: 'white', marginLeft: '6%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Objetivo</Text>
                <Text style = {styles.motivation}>Eu quero parar de gastar meu tempo de maneira tão inútil, meus objetivos são estudar mais, fazer exercícios físicos e dormir melhor.</Text>
            </View>
            <View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {{color: 'white', marginLeft: '6%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Aplicativos Bloquados</Text>
                    <Text style = {{color: 'white', marginRight: '4%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Tempo</Text>
                </View>
                <View style = {{rowGap: 30}}>
                    <View style = {{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <BlockedAPP APPName = 'Instagram' APPLogo = {InstagramSymbol}/>
                        <Text style = {{color: 'red', marginRight: '4%'}}>80 min</Text>
                    </View>
                    <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <BlockedAPP APPName = 'Instagram' APPLogo = {InstagramSymbol}/>
                        <Text style = {{color: 'red', marginRight: '4%'}}>40 min</Text>
                    </View>
                    <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <BlockedAPP APPName = 'Instagram' APPLogo = {InstagramSymbol}/>
                        <Text style = {{color: 'green', marginRight: '4%'}}>10 min</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style = {{color: 'white', marginLeft: '6%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Destino do Dinheiro</Text>
                <Text style = {{color: 'rgba(255, 255, 255, 0.7)', marginLeft: '6%', marginTop: '4%',  fontSize: 12}}>Nome: Fundação Araucária</Text>
                <Text style = {{color: 'rgba(255, 255, 255, 0.7)', marginLeft: '6%', marginTop: '4%', fontSize: 12}}>Chave PIX: 88797623145</Text>
            </View>
            <View style = {{paddingBottom: 30}}>
                <Text style = {{color: 'white', marginLeft: '6%', marginTop: '4%', fontWeight: 'bold', fontSize: 16}}>Validade da Meta</Text>
                <Text style = {{color: 'rgba(255, 255, 255, 0.7)', marginLeft: '6%', marginTop: '4%',  fontSize: 12}}>07/08/2025 até 14/08/2025</Text>
            </View>
        </View>
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

function appTime(){
    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, 0.6)', 
        backgroundColor: 'black',
        width: '90%',
        borderRadius: 15,
    },
    motivation: {
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'justify',
        marginLeft: '6%',
        width: '90%',
        fontSize: 12,
        paddingTop: 5,
        fontWeight: 'medium'
    }
})  