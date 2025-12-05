import { env } from "@/server/env";
import { RecipeByIngredientsResponse } from "@/server/types";

// interface, deals with fetching and responses from API and gives typed responses / requests
export class SpoonacularAPI {
  private baseUrl: string = "https://api.spoonacular.com/recipes";
  private apiKey: string = env.SPOONACULAR_KEY;

  constructor() {}

  // TODO:
  // public async getByIngredients(
  //   ingredients
  // )

  public async getRecipesFromIngredients(
    ingredients: string[],
    numRecipes: number = 10
  ): Promise<RecipeByIngredientsResponse[]> {
    const ingredientsFormatted: string =
      "ingredients=" + ingredients.join(",+");

    const endpointURL: string =
      this.baseUrl +
      "/findByIngredients?" +
      ingredientsFormatted +
      `&number=${numRecipes}` +
      "&apiKey=" +
      this.apiKey;

    console.log(endpointURL);

    const response = await fetch(endpointURL);

    const responseJson = await response.json();
    const recipeList: RecipeByIngredientsResponse[] = responseJson;

    console.log("json: ", responseJson, "\n\n");
    console.log("list: ", recipeList);

    let recipeIds: string[] = [];
    for (const recipeResponse of recipeList) {
      recipeIds.push(recipeResponse.id.toString());
    }

    this.getRecipesFromIDs(recipeIds);

    return recipeList;
  }
  // TODO: make an interface with AI for the recipe object response
  public async getRecipesFromIDs(idList: string[]) {
    for (const id of idList) {
      const endpointURL: string =
        this.baseUrl + "/" + id + "/information" + "?&apiKey=" + this.apiKey;

      console.log(endpointURL);

      const response = await fetch(endpointURL);

      const responseJson = await response.json();

      console.log("\n\nrecipe info json: ", responseJson);
    }
  }
}
