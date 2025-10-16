import { View, Text, StyleSheet } from 'react-native'

const App = () => {


  return(
  <View style={estilos.fundo}>
      <Caixa estilo={ estilos.red } nome="vermelho" />
      <Caixa estilo={ estilos.yellow } nome="amarelo" />
      <Caixa estilo={ estilos.blue } nome="azul" />


  </View>
  )
}

const Caixa = ({ estilo, nome }) =>{
  return(
    <View style={estilo}>
      { nome }
    </View>
  )
}


const estilos = StyleSheet.create(
  {
    fundo: {
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    blue: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      width: 60,
      height: 60,
      borderRadius: 100
    },
    red: {
      backgroundColor: 'red',
      width: 60,
      height: 60
    },
    yellow: {
      backgroundColor: 'yellow',
      color: 'black',
      width: 60,
      height: 60
    }
  }
)

export default App