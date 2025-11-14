import { GLOBAL_STYLES } from '@/theme';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function pantry() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ backgroundColor: "#E1AA57"}}>
      <ScrollView contentContainerStyle={GLOBAL_STYLES.container} 
              showsVerticalScrollIndicator={false}>
        <ScrollView style={styles.ingredientBox}>
          <View style={styles.ingredient}>
              <Checkbox style={styles.checkbox} value={checked} onValueChange={setChecked}></Checkbox>
              <Text style={styles.ingredientText}>Eggs</Text>
          </View>

          <View style={styles.ingredient}><Text style={styles.ingredientText}>Milk</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Butter</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Cheddar Cheese</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Greek Yogurt</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Spinach</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Tomatoes</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Onions</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Garlic</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Bell Peppers</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Carrots</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Celery</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Potatoes</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Chicken Breast</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Ground Beef</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Tofu</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Canned Beans</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Pasta</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Rice</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Quinoa</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Olive Oil</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Soy Sauce</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Peanut Butter</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Jam</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Bread</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Tortillas</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Cereal</Text></View>
          <View style={styles.ingredient}><Text style={styles.ingredientText}>Oats</Text></View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ingredientBox: {
    marginTop: 40,
    width: "90%",
    height: 500, // use Dimensions for dynamic
  },
  ingredient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#D08121",
  },
  ingredientText: {
    marginLeft: 15,
    fontWeight: "bold",
  },
  checkbox: {
    marginLeft: 15,
  }
})