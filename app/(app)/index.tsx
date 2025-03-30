import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/not-found">Profile Not Found</Link>

      <Link href="/products">Products</Link>
      <Link href="/missing-product">Missing Product</Link>
    </View>
  );
}
