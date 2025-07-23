import { View, Text } from 'react-native'
import Header from '../../components/Header'
import SafeArea from '../../components/SafeArea'
import Button from '../../components/Button'
import GearSymbol from '../../../assets/images/GearSymbol.png'

export default function(){
    return(
        <SafeArea>
            <View style = {{flex: 1}}>
                <Header pageName = 'Metas Ativas' backPage = 'Home'/>
                <View style = {{flex: .90, marginTop: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 28, fontWeight: 'bold'}}>Nenhuma Meta Aqui</Text>
                </View>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <Button text = 'Nova Meta' image = {GearSymbol}  destinationScreen = 'NewGoal'/>
                </View>
            </View>
        </SafeArea>
    )
}