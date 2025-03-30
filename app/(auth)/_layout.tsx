import { View, StyleSheet, Image } from "react-native";

import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <View>This is auth Logo</View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  logo: {
    width: 100,

    height: 100,
  },
});
