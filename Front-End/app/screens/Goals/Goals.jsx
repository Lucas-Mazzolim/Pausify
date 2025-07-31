import { View, Text, ScrollView } from 'react-native'
import Header from '../../components/Header'
import SafeArea from '../../components/SafeArea'
import Button from '../../components/Button'
import GearSymbol from '../../../assets/images/GearSymbol.png'
import CardActiveGoal from '../../components/CardActiveGoal'

export default function(){

    return(
        <SafeArea>
            <Header pageName = 'Metas Ativas' backPage = 'Home'/>
            <ScrollView>
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20, rowGap: 30, paddingBottom: 30}}>
                    <CardActiveGoal />
                    <Button text = 'Nova Meta' image = {GearSymbol}  destinationScreen = 'NewGoal'/>
                </View>
            </ScrollView>
        </SafeArea>
    )
}

const NoGoal = () => {
    return(
        <View style = {{flex: .90, marginTop: '10%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{color: 'white', fontSize: 28, fontWeight: 'bold'}}>Nenhuma Meta Aqui</Text>
        </View>
    )
}