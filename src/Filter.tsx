import { useAtom } from "jotai"
import { filterAtom } from "./Store"
import { Button, StyleSheet, View } from "react-native";

const Filter: React.FC = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <View style={styles.container}>
      <Button title="All" onPress={() => setFilter('all')} />
      <Button title="Completed" onPress={() => setFilter('completed')} />
      <Button title="Incomplete" onPress={() => setFilter('incomplete')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  }
});

export default Filter;