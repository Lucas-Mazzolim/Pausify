import { View, StyleSheet, Text, Image } from 'react-native'
import GoogleIcon  from '../../assets/images/googleIcon.png'

export default function GoogleBox(){
    return(
        <View style = {styles.container}>
            <Image source = {GoogleIcon}/>
            <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 18}}>Google</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        paddingTop: 6,
        paddingBottom: 6, 
        width: '35%'
    }
})