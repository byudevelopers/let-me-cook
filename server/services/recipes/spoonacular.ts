import { env } from "@/server/env";

// interface, deals with fetching and responses from API and gives typed responses / requests
export class SpoonacularAPI {
  private baseUrl: string = "https://api.spoonacular.com/recipes/";
  private apiKey: string = env.SPOONACULAR_KEY;

  constructor() {}

  public async getByIngredients(
    ingredients: string[],
    numRecipes: number = 10
  ) {
    const ingredientsFormatted: string =
      "ingredients=" + ingredients.join(",+");
    const endpointURL: string =
      this.baseUrl +
      "findByIngredients?" +
      ingredientsFormatted +
      `&number=${numRecipes}` +
      "&apiKey=" +
      this.apiKey;

    const response = await fetch(endpointURL);

    console.log("url: ", endpointURL);
    console.log("response: ", response);
  }
}
// also need something to format the json back and forth
