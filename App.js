import { StyleSheet, View } from 'react-native'
import Calculadora from './exercicio01/Calculadora'
import Estilos from './exercicio02/Estilos'
import Props from './exercicio3/Quadrado'
import BotaoContator from './exercicio4/BotaoContator'
import CardPessoa from './exercicio5/CardPessoa'
import Axios from './exercicio6/Axios'

const App = () => {

  const dados = [
      {
          id: 1,
          nome: 'joao',
          email: 'j@gmail.com',
      },
      {
          id: 2,
          nome: 'pedro',
          email: 'p@gmail.com',
      },
      {
          id: 3,
          nome: 'vitor',
          email: 'v@gmail.com',
      },
      {
          id: 4,
          nome: 'leticia',
          email: 'l@gmail.com',
      },
      {
          id: 5,
          nome: 'rait',
          email: 'r@gmail.com',
      }
  ]

  return (
    <View style={styles.container}>
      {/* <Calculadora/> ex: 1*/} 
      {/* <Estilos/> ex: 2*/}
      {/* <Quadrado cor="blue" tamanho={100} texto="Azul" centralizado="center"/>
          <Quadrado cor="red" tamanho={150} texto="Vermelho" centralizado="center"/>
          <Quadrado cor="green" tamanho={60} texto="Verde" centralizado="center"/>
          <Quadrado cor="purple" tamanho={300} texto="Roxo" centralizado="center"/>
      ex: 3*/}
      {/* <BotaoContator valor={1}/>
      <BotaoContator valor={5}/>
      <BotaoContator valor={10}/> ex: 4*/}
      {/* <CardPessoa dados={dados}/> */}
      <Axios/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App