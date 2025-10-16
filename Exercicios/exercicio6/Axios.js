import { View, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper';
import {useState} from 'react'
import axios from 'axios'

const Axios = () => {

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

  var cards = dados.map( obj  => {
    return(
        <Card key={obj.id}>
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
    <ScrollView>
        <View>      
            <TouchableOpacity onPress={() => Buscar()}>Buscar Posts</TouchableOpacity>
      
        { cards }
      </View>
    </ScrollView>
  );
};

export default Axios
