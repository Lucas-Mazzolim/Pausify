import { View } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import SafeArea from '../../components/SafeArea'


export default function(){
    return(
        <SafeArea>
            <View style = {{flex: 1}}>
                <Header pageName = 'Nova Meta' backPage = 'Goals'/>
                <Button text = 'Continuar' image = {GearSymbol}  destinationScreen = 'NewGoal'/>
            </View>
        </SafeArea>
    )
}