import { View } from "react-native";
import SafeArea from "../../components/SafeArea";
import Header from "../../components/Header";


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