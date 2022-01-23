import React, {useState} from "react";
import {SafeAreaView, TextInput, StyleSheet, Text, Button, View, FlatList } from 'react-native';

export default function App() {
  const [numberOne, onChangeNumberOne] = useState(null);
  const [numberTwo, onChangeNumberTwo] = useState(null);
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);
  
  const onClickSum = () => {
    if(numberOne != null && numberTwo != null){
      const sum = parseInt(numberOne) + parseInt(numberTwo);
      setResult(sum);
      const t = numberOne + " + " + numberTwo + " = " + sum;
      setData([...data, {key: t}]);
    }
    
  }

  const onClickDeduction = () => {
    if(numberOne != null && numberTwo != null){
      const deduction = parseInt(numberOne) - parseInt(numberTwo);
      setResult(deduction);
      const t = numberOne + " - " + numberTwo + " = " + deduction;
      setData([...data, {key: t}]);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Result:{result} </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumberOne}
        value={numberOne}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumberTwo}
        value={numberTwo}
        keyboardType="number-pad"
      />
      
      <Button onPress={onClickSum} title="       +       " color="#f194ff" style={styles.button}  ></Button>
      <Button onPress={onClickDeduction} title="       -        "></Button>

      <View style={styles.containerTwo}>
        <Text>History</Text>
        <FlatList
          data={data}
          renderItem={({item}) =><Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },

  containerTwo: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 100, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    width: 100, 
    height: 40, 
    margin: 12,
    justifyContent: "space-between"
  }

});
