import { View, StyleSheet, Dimensions, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Home'
import Perfil from './screens/Perfil/Perfil';
import Thema from './screens/Theme/Thema'
import Help from './screens/Help/Help'
import Login from './screens/Login/Login'
import SignIn from './screens/SignIn/SignIn'
import SucessScreen from './screens/SucessScreen/SucessScreen'
import Goals from './screens/Goals/Goals'
import NewGoal from './screens/NewGoal/NewGoal'
import ConfirmationScreen from './screens/ConfirmationScreen/ConfirmationScreen'
import Payment from './screens/Payment/Payment'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name = 'Home'
          component = {Home}
        />
        <Stack.Screen 
          name = 'Perfil'
          component = {Perfil}
        />
        <Stack.Screen 
          name = 'Thema'
          component = {Thema}
        />
        <Stack.Screen 
          name = 'Help'
          component = {Help}
        />
        <Stack.Screen 
          name = 'Login'
          component = {Login}
        />
        <Stack.Screen 
          name = 'SignIn'
          component = {SignIn}
        />
        <Stack.Screen 
          name = 'SucessScreen'
          component = {SucessScreen}
        />
        <Stack.Screen 
          name = 'Goals'
          component = {Goals}
        />
        <Stack.Screen 
          name = 'NewGoal'
          component = {NewGoal}
        />
        <Stack.Screen 
          name = 'ConfirmationScreen'
          component = {ConfirmationScreen}
        />
        <Stack.Screen 
          name = 'Payment'
          component = {Payment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
