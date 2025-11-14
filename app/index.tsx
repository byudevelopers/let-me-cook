import { Link } from 'expo-router';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={40}
            style={{flex: 1, backgroundColor: "#296968"}}>
        <ScrollView contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false}>

            <View style={styles.header}></View>
            <Image source={require("../assets/images/cookingPlaceholder.png")} style={styles.img}></Image>
            <Text style={[styles.title, {color: 'darkblue'}]}>Let... Me... COOK</Text>

            <Link style={styles.link} href="/pantry">Pantry</Link>
            <Link style={styles.link} href="/history">History</Link>
            <Link style={styles.link} href="/camera">Camera</Link>
            <Link style={styles.link} href="/profile">Profile</Link>
        </ScrollView>
        </KeyboardAvoidingView>
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 }, // pushes shadow downward
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: "#E1AA57",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    aiBox: {
        width: "100%",
        height: 100,
        backgroundColor: "#CCB48F",
        alignItems: "center",
    },
    msg: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        width: 150,
        height: 55,
        textAlign: "center",
        marginTop: 20,
        fontSize: 20,
        
    },
    img: {
        marginTop: 100,
        width: 200,
        height: 200,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        
    }
})