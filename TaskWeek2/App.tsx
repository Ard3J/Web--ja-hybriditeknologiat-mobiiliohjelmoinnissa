import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has closed');
            setModalVisible(!modalVisible);
          }}>
            <View style={[styles.main, {backgroundColor: '#00000066'}]}>
              <View style={styles.modal}>
                <Text style={styles.text}>This is modal.</Text>
                <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.text}>Close modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Text style={styles.text}>This is main page.</Text>
          <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(true)}>
            <Text style={styles.text}>Show modal message</Text>
          </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '35%',
    borderRadius: 20
  },
  text: {
    color: '#000',
  },
  button: {
    marginTop: 8,
    borderRadius: 20,
    padding: 10,
    elevation: 1
  }
});
