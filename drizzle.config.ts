import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL as string;

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
