import { useAtom } from "jotai";
import { filteredTodosAtom, todosAtom } from "./Store";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const filteredTodos = useAtom(filteredTodosAtom)[0];

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <FlatList
      data={filteredTodos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.todoContainer}>
          <Text style={item.completed ? styles.completed : undefined}>{item.text}</Text>
          <Button title="Toggle" onPress={() => toggleTodo(item.id)} />
          <Button title="Remove" onPress={() => removeTodo(item.id)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  completed: {
    textDecorationLine: 'line-through'
  }
});

export default TodoList;