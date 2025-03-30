import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

import { Link, router } from "expo-router";

export default function Login() {
  const loginHandler = () => {
    router.replace("/profile");
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <Button title="Login" onPress={loginHandler} />

      {/* you can use relativeToDirectory to navigate to the current directory without relativeToDirectory */}
      {/* only in index.tsx file, you should use relativeToDirectory */}
      <Link href="./register">Register</Link>

      <Button
        title="Go to Profile"
        onPress={() => router.replace("/profile")}
      />
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
