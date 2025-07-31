import { View, Text, TextInput, StyleSheet } from 'react-native' 

export default function RoundedInput(props){
    return(
        <View style = {{justifyContent: 'center', alignItems: 'center', rowGap: '7%', width: props.width}}>
            <Text style = {styles.inputName}>{props.inputName}</Text>
            <TextInput style = {styles.dataInput}
                placeholder = {props.placeholder}
                placeholderTextColor = 'rgba(255, 255, 255, 0.6)'
                inputMode = 'email'
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputName: {
        alignSelf: 'flex-start',
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: '8.5%',
        fontWeight: 400,
    },
    dataInput: {
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 1,
        borderRadius: 20,
        width: '88%',
        height: 50,
        paddingLeft: '2.5%',
        color: 'white',
        fontWeight: 400,
        backgroundColor: '#282828',
    }
})