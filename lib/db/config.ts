import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from "dotenv";

// Explicitly define .env for drizzle
config({ path: ".env" });

// Create neon serveless connection with drizzle orm wrapper
const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle(sql);