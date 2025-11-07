import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Home = () => {
    const [text, setText] = useState("");
    const scrollRef = useRef<ScrollView>(null);
    const lastOffsetY = useRef(0); 

    // a slight nudge up or down will scroll the page that direction
    const handleSnap = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const screenHeight = Dimensions.get('window').height;
      
        
        const goingDown = offsetY > lastOffsetY.current;
        const goingUp = offsetY < lastOffsetY.current;
      
        let snapTo = lastOffsetY.current;
      
        if (goingDown) {
          snapTo = lastOffsetY.current + screenHeight;
        } else if (goingUp) {
          snapTo = lastOffsetY.current - screenHeight;
        }
      
        // Clamp snapTo to non-negative values
        snapTo = Math.max(0, snapTo);
      
        scrollRef.current?.scrollTo({ y: snapTo, animated: true });
      
        lastOffsetY.current = snapTo;
      };
      
      

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={40}
            style={{flex: 1, backgroundColor: "#296968"}}>
        <ScrollView contentContainerStyle={styles.container} 
            ref={scrollRef} onScrollEndDrag={handleSnap} 
            showsVerticalScrollIndicator={false}>

            <View style={styles.header}></View>
            <Image source={require("../assets/images/cookingPlaceholder.png")} style={styles.img}></Image>
            <Text style={[styles.title, {color: 'darkblue'}]}>Let... Me... COOK</Text>

            <Link style={styles.link} href="/pantry">Pantry</Link>
            <Link style={styles.link} href="/history">History</Link>
            <Link style={styles.link} href="/camera">Camera</Link>
            <Link style={styles.link} href="/profile">Profile</Link>
            
            <LinearGradient
                colors={['#E1AA57', '#CCB48F']} // top to bottom gradient
                style={styles.gradient} />
            <View style={styles.aiBox}>
                <TextInput style={styles.msg} 
                    placeholder='Type something...' 
                    onSubmitEditing={(event) => setText(event.nativeEvent.text)} />              
                <Text>You Typed: {text}</Text>
            </View>
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
    gradient: {
        width: "100%",
        backgroundColor: "black",
        height: 900,
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