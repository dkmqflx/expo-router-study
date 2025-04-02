import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />

      {/* Use modal for modal screens */}
      {/* file based modal screens */}
      <Stack.Screen
        name="modal"
        options={{ title: "Modal", presentation: "modal" }}
      />
      <Stack.Screen
        name="webmodal"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
