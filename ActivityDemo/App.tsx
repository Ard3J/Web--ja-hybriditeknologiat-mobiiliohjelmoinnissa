import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextActivityindicator from './components/TextActivityIndicator';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer: number = setTimeout(() => {
      setLoading(false)
    },3000)
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return (
    <View style={styles.container}>
      {loading ? (
      <TextActivityindicator
        message="Loading"
        size='large'
        color='#ff0000'
        />
      ) : (
        <Text>Welcome to the page</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
