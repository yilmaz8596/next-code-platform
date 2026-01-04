import "dotenv/config";

import { Pool } from "pg";

function getTargetDbName(databaseUrl: string): string {
  const url = new URL(databaseUrl);
  const pathname = url.pathname ?? "";
  const dbName = pathname.replace(/^\//, "").trim();

  if (!dbName) {
    throw new Error(
      "DATABASE_URL must include a database name in the path (e.g. .../leetradb)."
    );
  }

  return dbName;
}

function toAdminUrl(databaseUrl: string): string {
  const url = new URL(databaseUrl);
  url.pathname = "/postgres";
  url.search = "";
  return url.toString();
}

function quoteIdent(identifier: string): string {
  return `"${identifier.replace(/"/g, '""')}"`;
}

async function ensureDatabaseExists() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL in environment.");
  }

  const targetDb = getTargetDbName(databaseUrl);
  const adminUrl = toAdminUrl(databaseUrl);

  const pool = new Pool({ connectionString: adminUrl });

  try {
    const exists = await pool.query(
      "select 1 from pg_database where datname = $1",
      [targetDb]
    );

    if (exists.rowCount && exists.rowCount > 0) {
      console.log(`Database already exists: ${targetDb}`);
      return;
    }

    await pool.query(`create database ${quoteIdent(targetDb)}`);
    console.log(`Database created: ${targetDb}`);
  } finally {
    await pool.end();
  }
}

ensureDatabaseExists().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`db:ensure failed: ${message}`);
  process.exitCode = 1;
});
