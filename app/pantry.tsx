import { GLOBAL_STYLES } from '@/theme';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function pantry() {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [showAddBox, setShowAddBox] = useState(false);
  const [ingredients, setIngredients] = useState([
    "Milk",
    "Butter",
    "Cheddar Cheese",
    "Greek Yogurt",
    "Spinach",
    "Cereal",
    "Oats"
  ]);


  const toggleCheckbox = (ingredient: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  const addIngredient = (ingredient: string) => {
    if (ingredient.trim() != "" && !ingredients.includes(ingredient)) {
      setIngredients(prev => [...prev, ingredient]);
    }
    setShowAddBox(false);
  }

  const toggleAddIngredientButton = () => setShowAddBox(!showAddBox);
  

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
        {showAddBox && 
          <View style={styles.addIngredientBox}>
            <TextInput placeholder='What would you like to add to your pantry?'
                      placeholderTextColor={"white"}
                      onSubmitEditing={(e) => addIngredient(e.nativeEvent.text)}
                      style={styles.addIngredientText}
            ></TextInput>
          </View>
        }
        <TouchableOpacity onPress={toggleAddIngredientButton} style={styles.addIngredientButton} activeOpacity={1}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
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
    borderColor: "black",
  },
  addIngredientButton: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "green",
    bottom: 20,
    right: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "darkgreen",
    shadowOpacity: 1,
    shadowRadius: 0,

    // control the + icon
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    color: "white",
    fontSize: 44,
  },
  addIngredientBox: {
    width: 330,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#B86F1C",
    position: "absolute",
    top: "40%",
    display: "flex",
    justifyContent: "center",

    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#9E5F18",
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  addIngredientText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
})