import { Platform } from "react-native";
import { Slot, Tabs } from "expo-router";
import { Stack } from "expo-router";

/**
 * Root Layout Configuration
 *
 * This file (_layout.tsx) is a special file in Expo Router that defines the root
 * navigation structure and layout of your application.
 *
 * Platform-Specific Navigation:
 * 1. Web Platform:
 *    - Uses a custom web navigation layout with sidebar
 *    - Implements a traditional web navigation pattern
 *    - Left sidebar navigation with main content area
 *    - Uses standard HTML/CSS for web-specific layout
 *
 * 2. Mobile Platforms (iOS/Android):
 *    - Uses Tabs navigation
 *    - Common mobile-first navigation pattern
 *    - Bottom tab bar navigation (commented Stack navigation available)
 *
 * Navigation Components:
 * - Slot: Renders child routes (used in web layout)
 * - Tabs: Bottom tab navigation for mobile
 * - Stack: (Commented out) Alternative stack navigation
 *
 * Usage:
 * - The Platform.OS check enables different layouts for web and mobile
 * - Web uses a traditional sidebar layout
 * - Mobile uses standard mobile navigation patterns
 */
export default function Layout() {
  if (Platform.OS === "web") {
    return (
      <div style={{ display: "flex" }}>
        <nav style={{ width: "200px", backgroundColor: "#f0f0f0" }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <main style={{ flex: 1 }}>
          <Slot />
        </main>
      </div>
    );
  }
  return <Tabs />;
  // return <Stack />;
}
