import { Text, View, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Footer from '../../components/Footer'
import SafeArea from '../../components/SafeArea'
import UndefinedUser from '../../../assets/images/UndefinedUser.png'
import HelpSymbol from '../../../assets/images/HelpSymbol.png'
import ShareSymbol from '../../../assets/images/ShareSymbol.png'
import ThemeSymbol from '../../../assets/images/ThemeSymbol.png'
import RightArrow from '../../../assets/images/RightArrow.png'

export default function Perfil( { navigation }){
    return (
      <SafeArea>
        <View style = {{flex: 1}}>
          <View style = {styles.profilePicture}>
            <Image style = {{marginLeft: '5%', width: '15%', height: '60%'}} source = {UndefinedUser}/>
            <Text style = {{color: 'white', fontSize: 20}}>Usuário Anônimo</Text>
          </View>
          <View style = {styles.profileOptions}>
            <OptionContainer  optionImage = {ThemeSymbol} optionName = {'Tema'} pageName = 'Thema' />
            <OptionContainer optionImage = {ShareSymbol} optionName = {'Compartilhar'} pageName = 'Thema' />
            <OptionContainer optionImage = {HelpSymbol} optionName = {'Ajuda'} pageName = 'Help' />
            <View style = {{flex: 20}}>
              {/* div tha occupies the blank space */}
            </View>
          </View>
          <Footer></Footer>
        </View>
      </SafeArea>
    )
}

function OptionContainer(props){

  const nav = useNavigation()

  console.log(props.pageName)
  console.log(props.optionImage)
  console.log(props.optionName)

  return(
    <View style = {styles.profileOption} onTouchStart = {() => nav.navigate(props.pageName)}>
      <View style = {styles.profileOptionLeft}>
        <Image style = {{marginLeft: '5%', width: '12%', height: '43%'}} source = {props.optionImage} />
        <Text style = {{color: 'white', fontSize: 24, fontWeight: 500}}>{props.optionName}</Text>
      </View>
      <View>
        <Image style = {{marginRight: 15}} source = {RightArrow}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profilePicture: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    columnGap: 20
  },
  profileOptions: {
    flex: 17
  },
  profileOption: {
    borderTopWidth: 1,
    borderBottomWidth: 1, 
    borderColor: 'rgba(255, 255, 255, 0.5)', 
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    columnGap: 24
  },
  profileOptionLeft: {
    height: '100%', 
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 25,
    flexDirection: 'row'
  }
})