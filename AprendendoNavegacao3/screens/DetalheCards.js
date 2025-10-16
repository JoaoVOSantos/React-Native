
import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Button, Text, Card } from 'react-native-paper'

// material UI para o tratamento
import {
    Alert
} from '@mui/material'

// biblioteca para gerar o hash md5
import md5 from 'crypto-js/md5'
import axios from 'axios'

const DetalheCards = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id, nome } = route.params || {};
    const [quadrinhos, setQuadrinhos] = useState([])
    const [series, setSeries] = useState([])
    const [historias, setHistorias] = useState([])
    const [eventos, setEventos] = useState([])

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

    useEffect(() => {

    }, [id]);

    const buscarQuadrinhos = async () => {
        setEventos([])
        setSeries([])
        setHistorias([])

        // ativa o loading, e some com success e error
        setLoading(true)
        setSuccess("")
        setError("")
        url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${pu_KEY}&hash=${hash}`
        axios.get(url)
            .then((retorno) => {
                // printando pra ver oq eu tenho que puxar depois, mas tbm uso postman
                console.log(retorno.data.data.results)

                // setando os dados, setando apenas o array com os personagens
                setQuadrinhos(retorno.data.data.results)
                // Tratamento
                setLoading(false)
                setSuccess("Quadrinhos Carregados!")
                setError("")
            })
            .catch((error) => {
                // Tratamento
                setError("'Erro ao buscar dados da Marvel API", error)
                setLoading(false)
                setSuccess("")
                setQuadrinhos([])
            })
    }

    const buscarSeries = async () => {
        setEventos([])
        setQuadrinhos([])
        setHistorias([])

        // ativa o loading, e some com success e error
        setLoading(true)
        setSuccess("")
        setError("")
        url = `https://gateway.marvel.com/v1/public/characters/${id}/series?ts=${ts}&apikey=${pu_KEY}&hash=${hash}`
        axios.get(url)
            .then((retorno) => {
                // printando pra ver oq eu tenho que puxar depois, mas tbm uso postman
                console.log(retorno.data.data.results)

                // setando os dados, setando apenas o array com os personagens
                setSeries(retorno.data.data.results)
                // Tratamento
                setLoading(false)
                setSuccess("Series Carregados!")
                setError("")
            })
            .catch((error) => {
                // Tratamento
                setError("'Erro ao buscar dados da Marvel API", error)
                setLoading(false)
                setSuccess("")
                setSeries([])
            })
    }

    const buscarHistorias = async () => {
        setEventos([])
        setQuadrinhos([])
        setSeries([])

        // ativa o loading, e some com success e error
        setLoading(true)
        setSuccess("")
        setError("")
        url = `https://gateway.marvel.com/v1/public/characters/${id}/stories?ts=${ts}&apikey=${pu_KEY}&hash=${hash}`
        axios.get(url)
            .then((retorno) => {
                // printando pra ver oq eu tenho que puxar depois, mas tbm uso postman
                console.log(retorno.data.data.results)

                // setando os dados, setando apenas o array com os personagens
                setHistorias(retorno.data.data.results)
                // Tratamento
                setLoading(false)
                setSuccess("Historias Carregadas!")
                setError("")
            })
            .catch((error) => {
                // Tratamento
                setError("'Erro ao buscar dados da Marvel API", error)
                setLoading(false)
                setSuccess("")
                setHistorias([])
            })
    }

    const buscarEventos = async () => {
        setHistorias([])
        setQuadrinhos([])
        setSeries([])

        // ativa o loading, e some com success e error
        setLoading(true)
        setSuccess("")
        setError("")
        url = `https://gateway.marvel.com/v1/public/characters/${id}/events?ts=${ts}&apikey=${pu_KEY}&hash=${hash}`
        axios.get(url)
            .then((retorno) => {
                // printando pra ver oq eu tenho que puxar depois, mas tbm uso postman
                console.log(retorno.data.data.results)

                // setando os dados, setando apenas o array com os personagens
                setEventos(retorno.data.data.results)
                // Tratamento
                setLoading(false)
                setSuccess("Eventos Carregados!")
                setError("")
            })
            .catch((error) => {
                // Tratamento
                setError("'Erro ao buscar dados da Marvel API", error)
                setLoading(false)
                setSuccess("")
                setEventos([])
            })
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.title}>Detalhes do {nome}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => buscarQuadrinhos()}
                    >
                        Quadrinhos
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => buscarSeries()}
                    >
                        Séries
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => buscarHistorias()}
                    >
                        Historias
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => buscarEventos()}
                    >
                        Eventos
                    </Button>

                </View>

                {loading && (
                    <View style={{ marginVertical: 20 }}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
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


                {/* Card escondido, e quando tem dados gera cards mediante a quantidade no array, no caso da API o maximo é 20 */}
                
                {quadrinhos && quadrinhos.map((quadrinho) => (
                    <Card key={quadrinho.id} style={{ width: "400px", margin: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{quadrinho.title}</Text>
                            <Text variant="bodyMedium">{quadrinho.description || "Quadrinho não possui descrição"}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: quadrinho.thumbnail.path + "." + quadrinho.thumbnail.extension }} />
                    </Card>
                ))}

                {series && series.map((serie) => (
                    <Card key={serie.id} style={{ width: "400px", margin: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{serie.title}</Text>
                            <Text variant="bodyMedium">{serie.description || "Quadrinho não possui descrição"}</Text>

                            {serie.urls.map((url) => (
                                <View>
                                    <Text variant="bodyMedium"><a> {url.type} </a></Text>
                                    <Text variant="bodyMedium"><a> {url.url}</a></Text>
                                </View>
                            ))}

                        </Card.Content>
                        <Card.Cover source={{ uri: serie.thumbnail.path + "." + serie.thumbnail.extension }} />
                    </Card>
                ))}
                {historias && historias.map((historia) => (
                    <Card key={historia.id} style={{ width: "400px", margin: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{historia.title}</Text>
                            <Text variant="bodyMedium">{historia.description || "historia não possui descrição"}</Text>

                        </Card.Content>
                        {/* tratamento caso thumbnail retorne null */}
                        <Card.Cover
                            source={{
                                uri: historia.thumbnail
                                    ? historia.thumbnail.path + "." + historia.thumbnail.extension
                                    : "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                            }}
                        />

                    </Card>
                ))}

                {eventos && eventos.map((evento) => (
                    <Card key={evento.id} style={{ width: "400px", margin: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{evento.title}</Text>
                            <Text variant="bodyMedium">{evento.description || "Evento não possui descrição"}</Text>

                            {evento.urls.map((url) => (
                                <View>
                                    <Text variant="bodyMedium"><a> {url.type} </a></Text>
                                    <Text variant="bodyMedium"><a> {url.url}</a></Text>
                                </View>
                            ))}
                        </Card.Content>
                        {/* tratamento caso thumbnail retorne null */}
                        <Card.Cover
                            source={{
                                uri: evento.thumbnail
                                    ? evento.thumbnail.path + "." + evento.thumbnail.extension
                                    : "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                            }}
                        />

                    </Card>
                ))}

                <Button
                        mode="contained"
                        style={styles.buttonGoback}
                        onPress={() => navigation.goBack()}
                    >
                        Voltar
                    </Button>


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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',      // quebra linha se a tela for menor
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        margin: 5,
        backgroundColor: 'green'
    },
    buttonGoback: {
        width: 100,
        margin: 5,
        backgroundColor: 'red'
    }
});

export default DetalheCards
