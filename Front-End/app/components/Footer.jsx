import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import HomeImg from '../../assets/images/HomeImg.png'
import ProfileImg from '../../assets/images/ProfileImg.png'
import { useNavigation, useRoute} from '@react-navigation/native';

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height
const navigationBarHeight = Dimensions.get('screen').height - windowH

export default function Footer(){

  const pageName = useRoute().name
  const navigation = useNavigation();

  let HomeStatus = pageName == 'Home' ? {
    height: 2,
    width: 32,
    borderRadius: 20,
    marginTop: 2
  } : {}

  let PerfilStatus = pageName == 'Home' ? {} : {
        height: 1,
        width: 30,
        borderRadius: 20,
        marginTop: 2
  }
  
  let activeText = pageName == 'Home' ? ['#D9D9D9' , '#FFFFFF'] : ['#FFFFFF', '#D9D9D9']

  return (
    <View style = {styles.footer}>
      <View style = {styles.footerDivision} onTouchStart = {() => {navigation.navigate('Home',)}}
      >
        <Image source = {HomeImg} style = {styles.icon}/>
        <View style = {{display: 'flex', alignItems: 'center', 'justifyContent': 'center'}}>
          <Text style = {{textAlign: 'center', fontSize: 11, fontWeight: '400', color: activeText[0]}}>Home</Text>
          <LinearGradient
                    colors={['#D812D4', '#720970']}
                    style={HomeStatus}
                    locations = {[0, 0.93]}/>
          </View>
      </View>
      <View style = {styles.footerDivision} onTouchStart = {() => {navigation.navigate('Perfil')}}>
        <Image source = {ProfileImg} style = {styles.icon} />
        <View style = {{display: 'flex', alignItems: 'center', 'justifyContent': 'center'}}>
          <Text style = {{textAlign: 'center', fontSize: 11, fontWeight: '400', color: activeText[1]}}>Perfil</Text>
          <LinearGradient
                    colors={['#D812D4', '#720970']}
                    style={PerfilStatus}
                    locations = {[0, 0.93]}/>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
      width: '100%',
      backgroundColor: '#191816',
      display: 'flex',
      flexDirection: 'row',
      height: windowW/6,
      borderColor: 'rgba(255, 255, 255, 0.1) ',
      borderBottomWidth: 1,
      borderTopWidth: 1,
    },
    icon:{
      width: 30,
      height: 35
    },
    footerDivision:{
      width: '50%',
      height: '100%%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
})