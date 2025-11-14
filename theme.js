import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#296968",
  primaryDark: "#1A4848",
  accent: "#E1AA57",
  light: "#c5dbdb",
  white: "#ffffff",
  black: "#000000",
};

export const GLOBAL_STYLES = StyleSheet.create({
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
  navbar: {
    backgroundColor: "#1A4848",
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 }, // pushes shadow upward
    shadowOpacity: 0.6,
    shadowRadius: 4,
    borderColor: "#1A4848",
    zIndex: 10, // makes shadow visible
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: "#E1AA57",
    height: "100%",
},
})