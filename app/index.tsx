import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={[styles.title, {color: 'darkblue'}]}>Let... Me... COOK</Text>

        <Link style={styles.link} href="/pantry">Pantry</Link>
        <Link style={styles.link} href="/history">History</Link>
        <Link style={styles.link} href="/camera">Camera</Link>
        <Link style={styles.link} href="/profile">Profile</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    img: {
        width: 200,
        height: 200,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        
    }
})