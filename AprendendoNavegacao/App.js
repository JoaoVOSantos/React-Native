import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Hello from './screens/Hello'
import Calculadora from './screens/Calculadora'

const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen name="Hello" component={Hello} options = {{title: "Principal"}}/>
        <Stack.Screen name="Calculadores" component={Calculadora} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App