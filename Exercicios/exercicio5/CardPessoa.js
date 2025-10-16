import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'

const CardPessoa = ({ dados }) => {

    var [lista, setLista] = useState(dados)

    console.log(lista)


    var cards = lista.map(obj => {
        return(
                <Card key={obj.id} style={{margin: 10}}>
                    <Card.Title
                        title={obj.nome}
                    />
                    <Card.Content>
                        <Text variant="titleLarge">{obj.email}</Text>
                    </Card.Content>
                </Card>
        )}
    )
    return (
        <View style={estilos.fundo}>
            
            <ScrollView>
            {cards}
            </ScrollView>
            {/* <FlatList
                data={lista}
                renderItem={}
                keyExtractor={}
            /> */}
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
export default CardPessoa