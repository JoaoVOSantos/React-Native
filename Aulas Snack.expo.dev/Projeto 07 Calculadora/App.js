import {View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'


const App = () => {

  // Variaveis de useState globais
  var [formula, setFormula] = useState('')
  var [resultado, setResultado] = useState(0)

  // Função de retorno dos dados
  const Retorno = (item) => {

    // condição ? valor_se_verdadeiro : valor_se_falso
    // se o item vier com virgula, essa linha muda para ponto, senão tiver virgula retorna   o   proprio item
    // é um if resumido
    let valor = item === ',' ? '.' : item;

    // If/Função de limpar a caso clique nos botoes de limpar 
    if(item == "AC" || item == "C"){
      setResultado(0)
      setFormula('')
      return
    }
    
    // se clicar em = tenta executar a conta, se conseguir seta resultado e mostra, senão seta resultado como 'Error' e mostra
    if(item === "="){
      try{
        setFormula(formula)
        var result = eval(formula)
        setResultado(result)
        return
      }
      catch{
        setResultado("Error")
      }
      return
    }
    // pega o valor anterior e adiciona o novo valor
    // exemplo: digito 7 depois + e depois 8
    // essa função pega o 7 retorna, adiciona o + ficando 7+
    // depois que digito 8, a função retorna 7+ e adiciona o 8
    // assim mostrando na tela a cada retorno
    setFormula((prev) => prev + valor)
    // Seta o resultado em 0 novamente, para a procima conta
    setResultado(0)
    
  }

  return(
    <View style = { estilos.fundo }>
      <View style = { estilos.menu }>
        <svg xmlns="http://www.w3.org/2000/svg" 
          
          height="24px" 
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="#ff9f0a">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </View>
      <View style = { estilos.views100 } >
        <Text style = {estilos.numeroDeCima }> {formula} </Text>
      </View>
      <View style = { estilos.views100 } >
        <Text style = {estilos.numero }> {resultado} </Text>
      </View>
      <View style = {estilos.linha}>
        <Contador estilo = {estilos.bolaCinza} valor = 'AC' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinza} valor = '+/-' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinza} valor = '%' callback = {Retorno} />
        <Contador estilo = {estilos.bolaLaranja} valor = '/' callback = {Retorno}/>
      </View>
      <View style = {estilos.linha}>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '7' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '8' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '9' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaLaranja} valor = '*' callback = {Retorno}/>
      </View>
      <View style = {estilos.linha}>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '4' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '5' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '6' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaLaranja} valor = '-' callback = {Retorno}/>
      </View>  
      <View style = {estilos.linha}>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '1' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '2' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '3' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaLaranja} valor = '+' callback = {Retorno}/>
      </View>
      <View style = {estilos.linha}>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = 'C' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = '0' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaCinzaEscuro} valor = ',' callback = {Retorno}/>
        <Contador estilo = {estilos.bolaLaranja} valor = '=' callback = {Retorno}/>
      </View>
    </View>
  )
}

// Função de todos os botoes
// Passado como parametro ou ausado para passar parametro, valor no caso o valor do botao
// callback seria para passar o valor a função Retorno.
// estilo é um retorno para o estilo
const Contador = ({ valor, callback, estilo }) => {

// função Click que vai ser usado no botao para retornar o valor clicado para o callback e posteriormente para a função Retonro em App()
  const Click = () => {
    callback(valor)
  }

  return(
    <View>

    <TouchableOpacity 
      onPress = {Click}
      style = {estilo}
      >
        <Text style = {estilos.textBotao}>{valor}</Text>
      </TouchableOpacity> 

    </View>

  )
}


// Css
const estilos = StyleSheet.create(
  {
     views100: {
       width: '100%'
     },
     fundo: {
      flex: 1,
      backgroundColor: 'black',
      color: 'white',
      gap: 5,
      alignItems: 'center',   
      justifyContent: 'end'
    },
    menu: {
      width: '100%',
      display: 'flex',
      padding: 5,
      justifyContent: 'flex-start'
    },
    bolaCinza: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5c5c5f',
      width: 70,
      height: 70,
      borderRadius: 100
    },
    bolaLaranja: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff9f0a',
      width: 70,
      height: 70,
      borderRadius: 100
    },
    bolaCinzaEscuro: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2a2a2c',
      width: 70,
      height: 70,
      borderRadius: 100
    },
    linha: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexDirection: 'row'
    },
    numero: { 
      display: 'flex',
      color: 'white', 
      fontSize: 45,
      width: '100%',
      justifyContent: 'flex-end'
    },
    numeroDeCima: { 
      display: 'flex',
      color: 'grey', 
      fontSize: 20,
      marginLeft: -10,
      width: '100%',
      justifyContent: 'flex-end'
    },
    textBotao: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  }
)
 
export default App