import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {View, Text, Button} from 'react-native'

import Card from './screens/Cards'
import DetalheCards from './screens/DetalheCards'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Card"
          component = { Card }
          options = {{ title: "Tela Pesquisa Herois" }}
        />
        
        <Stack.Screen 
          name = "Detalhe"
          component = { DetalheCards }
          options = {{  /*headerShown: false, */ title: "Detalhes do Heroi"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App