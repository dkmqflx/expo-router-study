import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

export default function NotFound() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>This screen doesn't exist.</Text>
      <Link href="/">Go to home!</Link>
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
