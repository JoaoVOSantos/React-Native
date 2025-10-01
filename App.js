import { useState } from 'react'
import { StyleSheet,TextInput, View } from 'react-native'

const App = () => {
  var [id, setId] = useState()
  var [posts, setPosts] = useState([])
  var [coments, setComents] = useState([])

  
    var BuscarPostsPorId = async () => {
      console.log('### inicio buscar ###')
      var url = `https://jsonplaceholder.typicode.com/posts/${id}`
      await axios.get(url).then((retorno) => {
        console.log(retorno)
        setPosts(retorno.data)
      })
  
      console.log('### Fim buscar ###')
    }

    var BuscarComentsPorId = async () => {
      console.log('### inicio buscar ###')
      var url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      await axios.get(url).then((retorno) => {
        console.log(retorno)
        setComents(retorno.data)
      })
  
      console.log('### Fim buscar ###')
    }


  return (
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
    </View>
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