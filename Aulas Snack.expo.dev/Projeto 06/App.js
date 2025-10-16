import Blog from './src/blog'
import { View , ScrollView} from 'react-native'
const App = () => {
  
  return(
    <View style={{flex: 1}}>
      <ScrollView>
      <Blog/>
      </ScrollView>
    </View>
  )
}


export default App