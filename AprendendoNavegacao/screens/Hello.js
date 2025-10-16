

import {View, Text, Button} from 'react-native'

const Hello = ({navigation}) => {
    return(
        <View>
            <Text>Voce esta na Hello</Text>
            <Button
                title="Calculadora"
                onPress={ () => {navigation.navigate("Calculadora")}}
                />
        </View>
    )
}

export default Hello

