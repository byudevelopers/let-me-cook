import { Tabs } from "expo-router";


export default function RootLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
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
