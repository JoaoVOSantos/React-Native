import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {View, Text, Button} from 'react-native'
import Botton from './screens/Botton'
const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Você esta na tela inicial do aplicativo
      </Text>
      <Button
        title="Abrir"
        onPress = { () => navigation.navigate("Botton")}
      />
    </View>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component = { Home }
          options = {{ title: "Tela Principal" }}
        />
        
        <Stack.Screen 
          name = "Botton"
          component = { Botton }
          options = {{  /*headerShown: false, */ title: "Aplicativo"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App