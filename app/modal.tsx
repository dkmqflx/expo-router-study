import { StyleSheet, Text, View } from "react-native";
import React from "react";

/**
 * Basic Modal Component
 *
 * Best Use Cases:
 * 1. Native mobile-only applications
 * 2. Simple modal overlays without animations
 * 3. When you need a lightweight modal without web-specific features
 * 4. When you want to handle modal behavior completely custom
 * 5. When you don't need backdrop/outside click dismissal
 *
 * Characteristics:
 * - Simple implementation
 * - No built-in animations
 * - No automatic dismissal handling
 * - Better performance for simple use cases
 * - More suitable for native-only apps
 */
export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
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
