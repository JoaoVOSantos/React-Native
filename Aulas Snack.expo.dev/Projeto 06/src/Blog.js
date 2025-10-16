import { View, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {useState} from 'react'


const Blog = () => {

  var [dados, setDados] = useState([])

  var Buscar = async () => {
    console.log('### inicio buscar ###')
    var url = 'https://jsonplaceholder.typicode.com/posts'
    await axios.get(url).then((retorno) => {
      console.log(retorno)
      setDados(retorno.data)
    })

    console.log('### Fim buscar ###')
  }

  var cards = dados.map( obj  =>{
    return(
        <Card>
        <Card.Title
          title={obj.title}
        />
        <Card.Content>
          <Text variant="titleLarge">{obj.body}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://imagem.com/' }} />
        
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    )
  })

  return (
    <View>
      <TouchableOpacity onPress={() => Buscar()}>Buscar Posts</TouchableOpacity>
      { cards }
    </View>
  );
};

export default Blog
