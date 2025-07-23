import { StyleSheet, Text, View, Image, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import BackSymbol from '../../assets/images/Back.png'
import { useNavigation } from '@react-navigation/native'


export default function Header(props){

    const nav = useNavigation()

    return (
      <View style = {styles.headerContainer}>
        <TouchableOpacity style = {{width: '8%', height: '100%', right: '42%', justifyContent: 'center'}}  onPress = {() => nav.navigate(props.backPage)}>
            <Image style = {{position: 'absolute', width: '100%', height: '48%'}} source = {BackSymbol} />
        </TouchableOpacity>
        <View style = {{position: 'absolute'}}>
            <Text style = {{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 26, width: '100%'}}>{props.pageName}</Text>
        </View>
      </View>
    )
} 

const styles = StyleSheet.create({
    headerContainer: {
        height: '9%',
        borderColor: '#262626ff',
        width: '105%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})