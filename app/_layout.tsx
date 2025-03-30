import { Slot } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>This is a header</Text>
      </View>

      <Slot />

      <View style={styles.footer}>
        <Text style={styles.footerText}>This is a footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "red",
    padding: 20,
  },
  headerText: {
    color: "white",
  },
  footer: {
    backgroundColor: "blue",
    padding: 20,
  },
  footerText: {
    color: "white",
  },
});
