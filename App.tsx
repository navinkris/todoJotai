import { SafeAreaView, StyleSheet } from "react-native";
import AddTodo from "./src/AddTodo";
import Filter from "./src/Filter";
import TodoList from "./src/TodoList";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddTodo />
      <Filter />
      <TodoList />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default App;