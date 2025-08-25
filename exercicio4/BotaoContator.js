import {View, StyleSheet, Button } from 'react-native'
import { useState } from 'react'

const BotaoContator = ({ valor }) => {
  var [ numero, setNumero ] = useState( valor )

  var Contar = () => {
    setNumero(numero+=valor)
  }

  return(
    <View style={estilos.fundo}>

      <Button title={ valor } onPress={ () => Contar()}/>
      O numero atual é: { numero }

    </View>
  )
}

const estilos = StyleSheet.create(
  {
    fundo: {
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }
)

export default BotaoContator