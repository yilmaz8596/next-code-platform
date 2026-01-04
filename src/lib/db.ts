import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "../db/schema";

type GlobalDbCache = typeof globalThis & {
  __drizzlePool?: Pool;
};

const globalForDb = globalThis as GlobalDbCache;

const pool =
  globalForDb.__drizzlePool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__drizzlePool = pool;
}

export const db = drizzle(pool, { schema });