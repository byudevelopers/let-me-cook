import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, GLOBAL_STYLES } from "../theme";



export default function profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleLogin = () => {
    setError("");

    /*
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    */

    console.log("Logging in…", username, password);
    router.push("/");

  };

  return (
    <View style={{ backgroundColor: COLORS.MainBackground}}>
    <ScrollView contentContainerStyle={GLOBAL_STYLES.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>
        Profile Login
      </Text>
      <TextInput
        style={[styles.input]}
        placeholder="Username"
        placeholderTextColor={COLORS.PromptText}
        value={username}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.PromptText}
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />

      {error !== "" && (
        <Text style={{ color: COLORS.PromptText, marginTop: 10 }}>
          {error}
        </Text>
      )}

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

    </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  inner: {
    paddingTop: 120,
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.NavBar,          // Darkest color you have
    marginTop: 50,
    marginBottom: 50,
  },

  input: {
    width: "80%",
    backgroundColor: COLORS.UserPrompt,   // soft beige input field
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.NavBar,           // dark outline
    color: COLORS.NavBar,                 // input text color
  },

  btn: {
    width: "80%",
    backgroundColor: COLORS.Button,       // your teal button color
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  btnText: {
    color: COLORS.LightTeal,              // closest to “white”
    fontSize: 18,
    fontWeight: "bold",
  },

  note: {
    marginTop: 20,
    fontSize: 14,
    color: COLORS.NavBar,                 // readable dark text
    opacity: 0.7,
  },
});
