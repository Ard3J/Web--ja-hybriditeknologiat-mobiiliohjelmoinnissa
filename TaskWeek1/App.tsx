import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setage] = useState<string>("")
  const ageAsNumber: number = age !== "" && !isNaN(Number(age)) === true ? Number(age)  : 220
  //Added age !== "" so that limits show zero until a valid number is given. Looks neater
  const limitLower = (220-ageAsNumber) * 0.65
  const limitHigher = (220-ageAsNumber) * 0.85
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder=''
        keyboardType='number-pad'
        value={age}
        onChangeText={setage}
        />
      <Text>Lower limit: {limitLower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {limitHigher.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 25,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  inputBox: {
    width: 100,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
});
