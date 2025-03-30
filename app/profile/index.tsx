import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";
export default function Profile() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
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
