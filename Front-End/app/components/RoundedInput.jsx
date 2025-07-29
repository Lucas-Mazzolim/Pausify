import { View, Text, TextInput, StyleSheet } from 'react-native' 

export default function RoundedInput(props){
    return(
        <View style = {{justifyContent: 'center', alignItems: 'center', rowGap: '7%', marginTop: '4%'}}>
            <Text style = {styles.inputName}>{props.inputName}</Text>
            <TextInput style = {styles.dataInput}
                placeholder = {props.placeholder}
                placeholderTextColor = 'white'
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
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        width: '88%',
        paddingLeft: '2.5%',
        color: 'white',
        fontWeight: 400,
        backgroundColor: '#282828',
    }
})