import { GLOBAL_STYLES } from "@/theme";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <View style={GLOBAL_STYLES.header}></View>
      <Tabs
        screenOptions={{
          headerShown: false,
          // 🔹 Overall tab bar styling
          tabBarStyle: GLOBAL_STYLES.navbar,
          tabBarActiveTintColor: "white",     // active tab text/icon
          tabBarInactiveTintColor: "#c5dbdb", // lighter blue when inactive
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 8,
          },
        }}>
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="pantry" options={{ title: "Pantry" }} />
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="history" options={{ title: "Favorites" }} />
        <Tabs.Screen name="camera" options={{ title: "Camera" }} />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({

})
