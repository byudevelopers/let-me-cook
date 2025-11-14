import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={{ backgroundColor: "#E1AA57"}}>
        <ScrollView contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false}>

            <Image source={require("../assets/images/cookingPlaceholder.png")} style={styles.img}></Image>
            <Text style={[styles.title, {color: 'darkblue'}]}>Let... Me... COOK</Text>
        </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: "#E1AA57",
        height: "100%",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    img: {
        marginTop: 100,
        width: 200,
        height: 200,
    },
})