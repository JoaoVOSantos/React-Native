import {View, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
const App = () => {



  return(
    <View>
      <Contador valor = '1'/>
      <Contador valor = '2'/>
      <Contador valor = '3'/>
      <Contador valor = '4'/>
      <Contador valor = '5'/>
      <Contador valor = '6'/>
      
    </View>
  )
}

const Contador = ({ valor }) => {
  var [ numero, setNumero ] = useState( valor )

  // Variavel local que nao altera o DOM
  var num = 0
  var Contar = () => {
    setNumero( numero++ )
  }

  return(
    <View style={estilos.fundo}>

    <Button title={ valor } onPress={ () => Contar()}/>

    o numero atual e { numero }
    </View>

  )
}

const estilos = StyleSheet.create(
  {
    fundo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
)
 
export default App