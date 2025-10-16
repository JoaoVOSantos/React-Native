import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { useState, use } from 'react';
import { TextInput } from 'react-native-paper';


const App = () => {
  const [cor1, setCor1] = useState("red")
  const [cor2, setCor2] = useState("blue")
  const [cor3, setCor3] = useState("yellow")

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerInputs}>
          <View style={styles.cores}>
            Cor 01:
            <TextInput
              label="Cor 1"
              value={cor1}
              onChangeText={text => setCor1(text)}
            />
          </View>
          <View style={styles.cores}>
            Cor 02:
            <TextInput
              label="Cor 2"
              value={cor2}
              onChangeText={(text) => setCor2(text)}
            />
          </View>
          <View style={styles.cores}>
            Cor 03:
            <TextInput
              label="Cor 3"
              value={cor3}
              onChangeText={(text) => setCor3(text)}
            />
          </View>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerQuadrados}>
            <View style={styles.bola}>
            </View>
            <View style={styles.bola}>
            </View>
            <View style={styles.bola}>
            </View>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              onPress={() => { console.log("asdasd") }}>
              <Text style={styles.textBotao}>aasd</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
  containerInputs: {
    display: "flex",
    width: '100wh',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  cores: {
    padding: 10,
    alignItems: 'flex-start',
  },
  input: {
    display: "flex",
    borderWidth: 1,
    width: 100,
    height: 40,

  },
  containerBody: {
    height: '100%',
    width: "100%",
    display: 'flex',
    backgroundColor: 'orange',
  },
  bola: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70
  },
  containerQuadrados: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  containerButton: {
    alignItems: 'center',
  },
  textBotao: {

  }
});


// para virar bola precisa de 
// borderRadius: 100
export default App