import cors from "@fastify/cors";
import Fastify from "fastify";
import { z } from "zod";
import { env } from "./env";

const app = Fastify({ logger: true });
await app.register(cors, { origin: true });

app.get("/health", async () => ({ ok: true }));

// these are all just example code

app.post("/recipes/search", async (req, reply) => {
  const Input = z.object({
    ingredients: z.array(z.string()).min(1),
    topK: z.number().int().min(1).max(20).default(10),
  });
  const input = Input.parse(req.body);
  //const recipes = await searchRecipes(input.ingredients);
  //return reply.send({ recipes: recipes.slice(0, input.topK) });
});

app.post("/cook/suggest", async (req, reply) => {
  const Input = z.object({
    ingredients: z.array(z.string()).default([]),
    topK: z.number().int().min(1).max(10).default(5),
  });
  const input = Input.parse(req.body);
  //const pantry = normalizeList(input.ingredients);
  //const candidates = await searchRecipes(pantry);
  //const suggestions = rank(pantry, candidates, input.topK);
  //return reply.send({ suggestions });
});

app.post("/vision/ingest", async (req, reply) => {
  const Input = z.object({ imageUrl: z.string().url() });
  const { imageUrl } = Input.parse(req.body);
  // TODO: call hosted vision or your infer service
  const extracted = [{ name: "black beans", qty: 1, unit: "can" }]; // mock
  return reply.send({ extracted });
});

// end example code

app
  .listen({ port: env.PORT, host: "0.0.0.0" })
  .then((addr) => app.log.info(`listening on ${addr}`))
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
