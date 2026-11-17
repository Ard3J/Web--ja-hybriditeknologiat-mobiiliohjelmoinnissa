import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import {useFonts} from 'expo-font';
import { useState } from 'react';
import calculateHR from './utils/calculatehr';

export default function App() {
  const [age,setAge] = useState<string>("")

  const hr = calculateHR(age) as {lower: number, upper: number}

  const [fontsLoaded] = useFonts({
    LatoRegular: require('./assets/Lato-Regular.ttf')
  })
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart rate limits</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter age'
        keyboardType='numeric'
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.output}>{hr.lower.toFixed(0)} - {hr.upper.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

