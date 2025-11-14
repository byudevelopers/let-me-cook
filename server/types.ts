// request
// response

export interface RecipeByIngredientsResponse {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: Object[];
  usedIngredients: Object[];
  unusedIngredients: Object[];
  likes: number;
}
