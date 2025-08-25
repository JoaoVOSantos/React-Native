import { View, Text, StyleSheet } from 'react-native'

const Estilos = () => {

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
      flexDirection: 'row',
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    blue: {
      backgroundColor: 'blue',
      width: 100,
      height: 100
    },
    red: {
      backgroundColor: 'red',
      width: 100,
      height: 100
    },
    yellow: {
      backgroundColor: 'yellow',
      color: 'black',
      width: 100,
      height: 100
    }
  }
)

export default Estilos

