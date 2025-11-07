import { config } from "dotenv";
import { z } from "zod";

config();

export const env = z
  .object({
    PORT: z.coerce.number().default(8787),
    SPOONACULAR_KEY: z.string(),
  })
  .parse(process.env);
