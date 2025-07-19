import { View, StatusBar, Dimensions, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const windowW = Dimensions.get('window').width
const windowH = Dimensions.get('window').height
const navigationBarHeight = Dimensions.get('screen').height - windowH

export default function SafeArea(props){
    return(
        <View style = {{flex: 1, marginTop: StatusBar.currentHeight, marginBottom: navigationBarHeight - windowW/12}}>
          <LinearGradient
          colors={['#1C1C1C', '#666666']}
          style={styles.background}
          locations = {[1, 0]}
          />
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: navigationBarHeight - windowW/12,
    top: 0,
    height: '100%',
  },
});