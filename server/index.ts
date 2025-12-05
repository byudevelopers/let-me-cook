import cors from "@fastify/cors";
import Fastify from "fastify";
import { z } from "zod";
import { env } from "./env";
import { SpoonacularAPI } from "./services/recipes/spoonacular";

async function start() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: true });

  app.get("/health", async () => ({ ok: true }));

  app.post("/giveIngredients", async (req, reply) => {
    const Input = z.object({
      ingredients: z.array(z.string()).min(1),
      topK: z.number().int().min(1).max(20).default(10),
    });
    const input = Input.parse(req.body);
    const spoon = new SpoonacularAPI();

    const recipes = await spoon.getRecipesFromIngredients(input.ingredients);
    return reply.send({ recipes: recipes.slice(0, input.topK) });
  });

  app
    .listen({ port: env.PORT, host: "0.0.0.0" })
    .then((addr) => app.log.info(`listening on ${addr}`))
    .catch((err) => {
      app.log.error(err);
      process.exit(1);
    });
}
// If CLI arguments are provided, run SpoonacularAPI directly
if (process.argv.length > 2) {
  const ingredients = process.argv.slice(2); // node index.js ingredient1 ingredient2 ...
  const spoon = new SpoonacularAPI();
  spoon.getRecipesFromIngredients(ingredients, 2).then((result) => {
    console.log("CLI result:", result);
  });
} else {
  start();
}
