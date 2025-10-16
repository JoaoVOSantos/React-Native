import { useState } from 'react'
import { StyleSheet, TextInput, View, Button, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import axios from 'axios'

const App = () => {
  var [id, setId] = useState()
  var [posts, setPosts] = useState([])
  var [coments, setComents] = useState([])


  var BuscarPostseComentsPorId = async () => {
    console.log(id)
    console.log('### inicio buscar posts ###')
    var url = `https://jsonplaceholder.typicode.com/posts/${id}`
    await axios.get(url).then((retorno) => {
      console.log(retorno.data)
      setPosts(retorno.data)
    })

    console.log('### Fim buscar ###')

    console.log('### inicio buscar comentarios ###')
    var url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    await axios.get(url).then((retorno) => {
      console.log(retorno.data)
      setComents(retorno.data)
    })

    console.log('### Fim buscar ###')

  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setId(text)}
        value={id}
        placeholder="Digite o Id do Post que deseja"
        keyboardType="numeric"
      />
      <Button
        onPress={() => { BuscarPostseComentsPorId() }}
        title="Pesquisar"
        color="#841584"
      />

      {posts && (
        <Card style={{ margin: 10 }}>
          <Card.Title title={posts.title} />
          <Card.Content>
            <View style={{ marginBottom: 10 }}>
              <Card.Content>{posts.body}</Card.Content>
            </View>
            {coments.map((obj) => (
              <Card key={obj.id} style={{ marginVertical: 5 }}>
                <Card.Title title={obj.name} />
                <Card.Content>
                  <View>
                    Email: {obj.email} <br></br>
                    Corpo: {obj.body}
                  </View>
                </Card.Content>
              </Card>
            ))}
          </Card.Content>
        </Card>
      )}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App