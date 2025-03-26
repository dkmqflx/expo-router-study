import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Product Detail Page with id: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
