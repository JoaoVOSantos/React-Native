import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import Calculadora from "./Calculadora"
import Hello from './Hello'
import Marvel from './Marvel'

const Tab = createBottomTabNavigator()

 const Botton = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: '#CCC',
                    headerShown: false,
                    tabBarIcon: (({color, size}) => {
                        let icone
                        if (route.name == 'Calculadora') icone='calculator'
                        else if (route.name == "Hello") icone='airplane-outline'
                        else if (route.name == "Marvel") icone='accessibility-outline'
                        return (<Ionicons name={icone} size={size} color={color} />)
                    })
                }) }
        >
            
            <Tab.Screen 
                name="Hello"
                component={Hello}
                options={{
                    title: "Hello", 
                    tabBarBadge: 2, 
                    tabBarBadgeStyle: {
                        backgroundColor: "blue", 
                        color: "white"
                    }}
                }
            />
            <Tab.Screen 
                name="Calculadora"
                component={Calculadora}
                options={{title: "Minha Calculadora"}}
            />

            <Tab.Screen 
                name="Marvel"
                component={Marvel}
                options={{
                    title: "Marvel", 
                    tabBarBadge: 3, 
                    tabBarBadgeStyle: {
                        backgroundColor: "red", 
                        color: "white"
                    }}
                }
            />


        </Tab.Navigator>
    )
}

export default Botton