

import {View, Text, Button} from 'react-native'

const Hello = ({navigation}) => {
    return(
        <View style={{gap: 5}}>
            <Text>Voce esta na Hello</Text>
            <Button
                title="Calculadora"
                onPress={ () => {navigation.navigate("Calculadora")}}
                />
                <Button
                title="Marvel"
                onPress={ () => {navigation.navigate("Marvel")}}
                />
        </View>
    )
}

export default Hello

