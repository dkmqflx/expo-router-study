import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

/**
 * Enhanced Web-Compatible Modal Component
 *
 * Best Use Cases:
 * 1. Cross-platform applications (Web + Mobile)
 * 2. When you need sophisticated animations
 * 3. When you need web-standard modal behavior:
 *    - Backdrop overlay
 *    - Click outside to dismiss
 *    - Animated entrance/exit
 * 4. When using Expo Router navigation
 * 5. When you need a more polished UX with transitions
 *
 * Characteristics:
 * - Built-in animations using react-native-reanimated
 * - Proper backdrop handling
 * - Integration with Expo Router navigation
 * - Click-outside-to-dismiss functionality
 * - Web-friendly implementation
 * - More complex but feature-rich
 *
 * Technical Features:
 * - FadeIn animation for backdrop
 * - SlideInDown animation for modal content
 * - Dismissal navigation handling
 * - Semi-transparent backdrop
 * - Responsive sizing
 */
export default function Modal() {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      {/* 
        Dismiss modal when pressing outside
        - dismissTo: Closes the modal and navigates to specified route
        - asChild: Passes navigation props to the child component (Pressable)
      */}
      <Link dismissTo href={"/"} asChild>
        {/* 
          Pressable covering entire screen
          StyleSheet.absoluteFill positions it over the entire parent view
        */}
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "90%",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Modal Screen
        </Text>
        <Link dismissTo href="/">
          <Text>← Go back</Text>
        </Link>
      </Animated.View>
    </Animated.View>
  );
}
