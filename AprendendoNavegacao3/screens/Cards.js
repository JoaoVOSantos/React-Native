
import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView,  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button, Text, Card } from 'react-native-paper'

// material UI para o tratamento
import {
    Box,
    LinearProgress,
    Alert
} from '@mui/material'

// biblioteca para gerar o hash md5
import md5 from 'crypto-js/md5'
import axios from 'axios'

const Cards = () => {
    // Usado para o TextInput e Axios
    const [heroi, setHeroi] = useState('')
    // Usado para o Axios e Card
    const [dados, setDados] = useState([])
    // usado para tratamento de erro, carregamento, sucesso
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // seria melhor com dotenv, porem estou passando tudo direto
    const pu_KEY = "7cdab0fed4d07a4f1b237c773056a355"
    const pr_KEY = "a783867e03f66260c3792149aba19d2dc55eee04"
    const ts = "1"
    // criando o md5, queria fazer com jwt, mas preferi o do video no youtube.
    const hash = md5(ts + pr_KEY + pu_KEY).toString()
    console.log(hash)

    const navigation = useNavigation();
    const abrirDetalheCards = (id, nome) => {
        navigation.navigate('Detalhe', { id, nome });
    };

    useEffect(() => {
        const conexao = async () => {
            if (heroi == '') {
                return (
                    setError("Digite um Heroi!"),
                    setSuccess(""),
                    setLoading(false)
                )
            }

            // ativa o loading, e some com success e error
            setLoading(true)
            setSuccess("")
            setError("")
            url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroi}&ts=${ts}&apikey=${pu_KEY}&hash=${hash}`
            axios.get(url)
                .then((retorno) => {
                    // printando pra ver oq eu tenho que puxar depois, mas tbm uso postman
                    console.log(retorno)

                    // setando os dados, setando apenas o array com os personagens
                    setDados(retorno.data.data.results)
                    // Tratamento
                    setLoading(false)
                    setSuccess("Herois Carregados!")
                    setError("")
                })
                .catch((error) => {
                    // Tratamento
                    setError("'Erro ao buscar dados da Marvel API", error)
                    setLoading(false)
                    setSuccess("")
                    setHeroi([])
                })
        }
        if (dados) conexao()
    }, [heroi]);
    // função para conectar na api e retornar os valores, ja retornando tratamento


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.title}>Marvel Heroes</Text>
                <View>
                    {/* campo texto para o usuario digitar */}
                    <TextInput
                        label="Digite o nome (ex: spider man)"
                        value={heroi}
                        onChangeText={texto => setHeroi(texto)}
                        style={styles.input}
                    />
                </View>
                {/* botao para buscar */}
                <View style={styles.button}>

                    {/* // loading escondido */}
                    {loading && (
                        <Box sx={{ mb: 2, mt: 2 }}>
                            <LinearProgress />
                        </Box>
                    )}

                    {/* // error escondido */}
                    {error && (
                        <Alert variant="outlined" severity="error">
                            {error}
                        </Alert>
                    )}

                    {/* // success escondido */}
                    {success && (
                        <Alert variant="outlined" severity="success">
                            {success}
                        </Alert>
                    )}
                </View>

                {/* Card escondido, e quando tem dados gera cards mediante a quantidade no array, no caso da API o maximo é 20 */}
                {dados.map((personagem) => (
                    <Card key={personagem.id} style={{ width: "400px", margin: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">Nome: {personagem.name}</Text>
                            <Text variant="bodyMedium">Descrição: {personagem.description || "Personagem não possui descrição"}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: personagem.thumbnail.path + "." + personagem.thumbnail.extension }} />
                        <Button mode="contained" style={{ backgroundColor: 'blue', margin: 5 }} onPress={() => abrirDetalheCards(personagem.id, personagem.name)}>
                            Detalhes
                        </Button>
                    </Card>
                ))}

            </View>
        </ScrollView>
    )

}

// css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20
    },
    title: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        marginBottom: 10
    },
    input: {
        margin: 5,
        width: "200px",
        fontSize: 12,

    },
    button: {
        width: "200px"
    }
});

export default Cards
