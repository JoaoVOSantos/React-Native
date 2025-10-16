import { View, Text, Button } from 'react-native'


const App = () => {






  return(
    <View>
      <Text> Ola Mundo </Text>
      <Button 
        title='Clica em mim'
        onPress={ () => {console.log('ola')}}
      />
    </View>
  )
}

export default App