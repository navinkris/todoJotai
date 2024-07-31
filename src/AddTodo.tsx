import { useAtom } from "jotai";
import { useState } from "react";
import { todosAtom } from "./Store";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text, completed: false}]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={text}
        onChangeText={setText}
      />
      <Button title='Add Todo' onPress={addTodo} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8
  }
})

export default AddTodo;