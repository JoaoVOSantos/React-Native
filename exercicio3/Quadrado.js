import {View, StyleSheet } from 'react-native'
const Quadrado = ({ cor, tamanho, texto, centralizado }) => {


  return(
    <View style={estilos.fundo}>
      <View style={{backgroundColor: cor, width: tamanho, height: tamanho, justifyContent: centralizado, alignItems: centralizado}}>
        {texto}
      </View> 
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
 
export default Quadrado