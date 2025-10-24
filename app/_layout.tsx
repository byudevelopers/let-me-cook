import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack />
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
