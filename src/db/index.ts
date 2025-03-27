import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const DATABASE_URL = process.env.DATABASE_URL as string;

// Create a PostgreSQL connection pool
const pool = new Pool({ connectionString: DATABASE_URL });

// Initialize Drizzle ORM
export const db = drizzle(pool);
