import cors from "@fastify/cors";
import Fastify from "fastify";
import { z } from "zod";
import { env } from "./env";

const app = Fastify({ logger: true });
await app.register(cors, { origin: true });

app.get("/health", async () => ({ ok: true }));

// these are all just example code

app.post("/llm/giveIngredients", async (req, reply) => {
  const Input = z.object({
    ingredients: z.array(z.string()).min(1),
    topK: z.number().int().min(1).max(20).default(10),
  });
  const input = Input.parse(req.body);
  //const recipes = await searchRecipes(input.ingredients);
  //return reply.send({ recipes: recipes.slice(0, input.topK) });
});

// end example code

app
  .listen({ port: env.PORT, host: "0.0.0.0" })
  .then((addr) => app.log.info(`listening on ${addr}`))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
