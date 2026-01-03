import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = globalThis; 

export const db = (globalForPrisma as any).prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") {
  (globalForPrisma as any).prisma = db;
}