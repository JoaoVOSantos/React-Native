// 1 bloco - importações
import { View, Text, Button } from 'react-native'
import axios from 'axios'
import {useState} from 'react'

// 2 bloco - componente ou componentes

const App = () => {
    // 2.1. - Variaveis
    var numero = 0    
    const num = 1
    var [valor, setValor] = useState(0)

    // 2.2. - funções internas
    const Validar = () => {
        numero += 1
        console.log(numero)
    }

    const Buscar = () => {
        var aux = valor + 1
        setValor(aux)
        console.log(valor)
    }

    const Blog = async () => {

        var url = 'https://jsonplaceholder.typicode.com/posts'
        await axios.get(url).then(retorno => {
            console.log(retorno.data)
        })

        console.log('chegou aqui')
    }


    // 2.3. - Retorno para o usuario
    return(
        <View style={{backgroundColor: "blue", color: 'white'}}>
            <Text> Ola Mundo </Text>
            <Button title="Numero" onPress={Validar}/>
            <Button title="Valor" onPress={Buscar}/>
            <Text>Numero: { numero }</Text>
            <Text>Valor: {valor}</Text>

            <Button title="Post" onPress={Blog}/>

        </View>
    )

}

// const botao = () => {

// }

// 3 bloco - exportar os componentes
export default App
