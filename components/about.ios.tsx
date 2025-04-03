import { StyleSheet, Text, View } from "react-native";
import React from "react";

/**
 * iOS-Specific About Screen Component
 *
 * File Naming Convention:
 * - The '.ios.tsx' extension tells React Native to use this component only on iOS devices
 * - You can create parallel files like 'about.android.tsx' or 'about.web.tsx' for other platforms
 * - React Native will automatically choose the right file based on the platform
 *
 * Usage:
 * - Import this component as 'About' (without .ios) in your app
 * - React Native's bundler will automatically select the correct platform-specific version
 *
 * Benefits:
 * - Allows for platform-specific UI implementations
 * - Maintains clean separation of platform code
 * - No need for platform-specific conditionals in the component
 * - Better code organization and maintenance
 *
 * Example:
 * import { About } from './components/about';
 * // On iOS, it will use this file
 * // On Android, it will look for about.android.tsx
 * // On Web, it will look for about.web.tsx
 * // If platform-specific file not found, it will use about.tsx as fallback
 */
export default function AboutIOS() {
  return (
    <View style={styles.container}>
      <Text>iOS About Screen - Sleek and Simple!</Text>
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
