import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false}} />
        <Stack.Screen name="profile" options={{ title: "Profile"}} />
        <Stack.Screen name="pantry" options={{ title: "Your Pantry"}} />
        <Stack.Screen name="history" options={{ title: "Favorite Recipes"}} />
        <Stack.Screen name="camera" options={{ title: "Take a Picture"}} />
      </Stack>
      <View style={styles.footer}><Text style={styles.footerText}>Footer</Text></View>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
      backgroundColor: "blue",
      height: 80,
      flex: 0,
      justifyContent: "center",
  },
  footerText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  }
})
