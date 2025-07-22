import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SafeArea from '../../components/SafeArea'
import Header from '../../components/Header'

export default function Help(){

  const sectionsText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, tellus vel feugiat maximus, dolor dui rutrum ante, nec tincidunt lectus diam quis purus']

    return (
      <SafeArea>
        <Header backPage = 'Perfil' pageName = 'Ajuda'/>
        <ScrollView>
            <HelpSection sectionTitle = {'Tópico 1'} sectionText = {sectionsText[0]}/>
            <HelpSection sectionTitle = {'Tópico 2'} sectionText = {sectionsText[0]}/>
            <HelpSection sectionTitle = {'Tópico 3'} sectionText = {sectionsText[0]}/>
            <HelpSection sectionTitle = {'Tópico 4'} sectionText = {sectionsText[0]}/>
        </ScrollView>      
      </SafeArea>
    )
} 

function HelpSection( props ){
  return(
    <View>   
      <Text style = {styles.sectionTitle}>{props.sectionTitle}</Text>
      <Text style = {styles.sectionText}>{props.sectionText} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: '1%',
    marginBottom: '10',
  },
  sectionText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
    textAlign: 'justify',
    width: '90%',
    fontWeight: 300,
    lineHeight: 32,
    marginBottom: '10%'
  }
})