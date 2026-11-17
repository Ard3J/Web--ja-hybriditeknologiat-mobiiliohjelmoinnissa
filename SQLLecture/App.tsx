import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Task } from './types/Task';
import Row from './components/Row';
import * as SQLite from 'expo-sqlite'

export default function App() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null)
  const [input, setInput] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const initDB = async() => {
      const database = await SQLite.openDatabaseAsync('tasks.db')
      setDb(database)
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        completed INTERGER DEFAULT 0
        )  
      `)
      loadTodos(database)
    }
    initDB()
    console.log("Database created")
  }, [])

  const loadTodos = async (database: SQLite.SQLiteDatabase) => {
    const result = await database.getAllAsync<Task>('SELECT * FROM todos ORDEr BY id DESC')
    setTasks(result)
  }

  const addTask = async () => {
    if(!input.trim() || !db) return
    await db.runAsync('INSERT INTO todos (text) VALUES (?)', input)


    // const id = tasks.length + 1
    // const task: Task = {id, text: input, completed: 0}
    // setTasks([...tasks, task])
    setInput("")
    loadTodos(db)
    console.log("Adding new item")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Add new task..."
          onSubmitEditing={addTask}
        />
      </View>
      <FlatList<Task>
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Row item={item}/>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
