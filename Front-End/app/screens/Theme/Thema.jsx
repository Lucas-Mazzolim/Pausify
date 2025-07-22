import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'

export default function Thema(){
    return (
      <SafeArea>
        <Header backPage = 'Perfil' pageName = 'Tema'/>
        <View style = {{flex: 1}}>
          <ThemeOption themeName = 'Escuro'/>
        </View>
      </SafeArea>
    )
} 

function ThemeOption( props ){
  return(
    <View style = {{flexDirection: 'row', columnGap: 12, marginTop: '6%', alignItems: 'center'}}>
        <View style = {style.themeRadioButton}></View>
        <Text style = {style.themeText}>{props.themeName}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  themeText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
    fontWeight: 'regular'
  },
  themeRadioButton: {
    borderWidth: 7,
    borderColor: 'purple',
    borderRadius: '100%',
    width: 25,
    height: 25,
    backgroundColor: '#282828282828',
    marginLeft: '5%'
  },

})