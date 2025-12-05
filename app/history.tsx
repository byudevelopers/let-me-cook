import { GLOBAL_STYLES } from '@/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function history() {
  return (
    <View style={GLOBAL_STYLES.container}>
      <View style={styles.title}><Text style={styles.titleText}>Favorites Coming Soon!</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  titleText: {
    color: "white",
    backgroundColor: "red",
    width: "100%",
    textAlign: "center",
    height: 50
  }
})