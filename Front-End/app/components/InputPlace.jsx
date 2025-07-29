import { View, Text, TextInput, StyleSheet} from 'react-native'

export default function(props){
    return(
        <View>
            <Text style = {{color: 'white', marginLeft: '6%', marginTop: '3%'}}>{props.inputName}</Text>
            <TextInput style = {styles.inputStyle}
                placeholder = {props.inputPlaceholder}
                placeholderTextColor = '#4A4848'
                keyboardType = {props.inputType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: '#4A4848',
        width: '90%',
        alignSelf: 'center',
        marginBottom: '4%',
        color: 'white',
        textAlignVertical: 'bottom',
        textAlign : 'left',
    },
})