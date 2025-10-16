import { View, Text, StyleSheet } from 'react-native'

const App = () => {


  return(
  <View style={estilos.fundo}>
      <View style={estilos.blue}>Teste 1</View>
      <View style={estilos.red}>
        <View> 1.1 </View>
        <View> 1.2 </View>
        <View> 1.3 </View>
      </View>
      <View style={estilos.yellow}>Teste 3</View>
  </View>
  )
}

const estilos = StyleSheet.create(
  {
    fundo: {
      flex: 1,
      backgroundColor: 'black',
      flexDirection: 'row'
    },
    blue: {
      flex: 1,
      backgroundColor: 'aqua',
      color: 'black'
    },
    red: {
      flex: 4,
      backgroundColor: 'red',
      color: 'white',
      flexDirection: 'row'
    },
    yellow: {
      flex: 1,
      backgroundColor: 'yellow',
      color: 'black'
    }
  }
)

export default App