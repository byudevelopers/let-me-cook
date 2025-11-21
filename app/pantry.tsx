import { GLOBAL_STYLES } from '@/theme';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function pantry() {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const toggleCheckbox = (ingredient: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  const ingredients = [
    "Milk",
    "Butter",
    "Cheddar Cheese",
    "Greek Yogurt",
    "Spinach",
    "Tomatoes",
    "Onions",
    "Garlic",
    "Bell Peppers",
    "Carrots",
    "Celery",
    "Potatoes",
    "Chicken Breast",
    "Ground Beef",
    "Tofu",
    "Canned Beans",
    "Pasta",
    "Rice",
    "Quinoa",
    "Olive Oil",
    "Soy Sauce",
    "Peanut Butter",
    "Jam",
    "Bread",
    "Tortillas",
    "Cereal",
    "Oats"
  ];
  

  return (
    <View style={GLOBAL_STYLES.container}>
        <ScrollView style={styles.ingredientBox} showsVerticalScrollIndicator={false}>
          {ingredients.map((ingredient) => (
            <View style={styles.ingredient} key={ingredient}> 
              <Checkbox style={styles.checkbox} value={!!checkedItems[ingredient]} onValueChange={() => toggleCheckbox(ingredient)}></Checkbox>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
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