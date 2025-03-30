import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

export default function ProfileNotFound() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>This profile screen doesn't exist.</Text>
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
