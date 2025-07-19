import { Text, View } from 'react-native'
import Footer from '../../components/Footer'

export default function Perfil( { navigation }){
    return (
      <View style = {{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{color: 'black'}}>Perfil</Text>
        <Footer></Footer>
      </View>
    )
}