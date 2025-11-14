import json
import regex as re

match_string = r"^(?:½ |⅓ |¼ |¾ |⅛ |⅔ |⅜ )?(?:\d{1,3}(?:\/\d{1,3})? )*(?:\(.*\))? ?(?:ounce|cup|can|packet|teaspoon|tablespoon|package|pound)?(?:s | )?(.*)$"

def get_ingredients(ingredients: list):
    formatted_ingredients = []
    for ingredient in ingredients:
        formatted = re.match(match_string, ingredient).group(1).lower()
        formatted_ingredients.append(formatted)
    return formatted_ingredients

with open("/home/matthewjames/src/let-me-cook/allrecipes_json.txt") as f:
    all_ingredients = set()
    for line in f:
        line = line.rstrip("\n")
        recipe = json.loads(line)
        ingredients = recipe['ingredients']
        ingredients = get_ingredients(ingredients)
        for ingredient in ingredients:
            all_ingredients.add(ingredient)

with open("all_recipes.txt", "w") as f:
    for ingredient in all_ingredients:
        f.write(ingredient + "\n")