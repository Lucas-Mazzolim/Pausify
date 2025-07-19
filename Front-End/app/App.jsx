import { View, StyleSheet, Dimensions, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Home'
import Perfil from './screens/Perfil/Perfil';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
