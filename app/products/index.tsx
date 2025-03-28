import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Products Page </Text>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

      <Link href="/products/details/product-1">Details Catch All</Link>
      <Link href="/products/deals/product-1">Deals Catch All</Link>
      <Link href="/products/best-sellers/product-1">
        Best Sellers Catch All
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
