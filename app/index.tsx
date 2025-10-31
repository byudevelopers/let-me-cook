import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <Image source={require("../assets/images/cookingPlaceholder.png")} style={styles.img}></Image>
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
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: "#296968",
        height: 70,
        width: "100%",
        boxShadow: "0px 0px 10px black"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E1AA57"
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