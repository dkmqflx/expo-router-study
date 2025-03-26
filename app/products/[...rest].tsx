import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetailCatchAll() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();

  return (
    <View style={styles.container}>
      <Text>Product Detail Page with id: {rest.join("/")}</Text>
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
