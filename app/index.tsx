import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GLOBAL_STYLES } from "../theme";

const Home = () => {
    return (
        <View style={{ backgroundColor: "#E1AA57"}}>
        <ScrollView contentContainerStyle={GLOBAL_STYLES.container} 
            showsVerticalScrollIndicator={false}>

            <Image source={require("../assets/images/cookingPlaceholder.png")} style={styles.img}></Image>
            <Text style={[styles.title, {color: 'darkblue'}]}>Let... Me... COOK</Text>
        </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
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