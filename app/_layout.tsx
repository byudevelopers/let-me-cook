import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <View style={styles.header}></View>
      <Tabs
        screenOptions={{
          headerShown: false,
          // 🔹 Overall tab bar styling
          tabBarStyle: {
            backgroundColor: "#1A4848",
            height: 80,
          },
          tabBarActiveTintColor: "white",     // active tab text/icon
          tabBarInactiveTintColor: "#c5dbdb", // lighter blue when inactive
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 8,
          },
        }}
      >
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
  header: {
    backgroundColor: "#296968",
    height: 70,
    width: "100%",    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 }, // pushes shadow downward
    shadowOpacity: 0.6,
    shadowRadius: 4,
    zIndex: 10, // makes shadow visible
  },
})
