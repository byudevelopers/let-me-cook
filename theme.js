import { StyleSheet } from "react-native";

export const COLORS = {
  TextBox: "#D08121",
  MainBackground: "#E1AA57",
  Highlight: "#FDCE42",
  UserPrompt: "#CCB48F",
  PromptText: "#4D4032",
  NavBar: "#1A4848",
  Button: "#296968", // Also header color
  Icon: "#338281",
  LightTeal: "#C5DBDB",
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