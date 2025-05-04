// lib/prisma.ts (Attempt 1)

import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

// Type for the global variable
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// Function to create the configured Prisma Client instance
const createPrismaClient = () => {
  console.log("Creating new PrismaClient instance with Neon adapter");

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set.");
  }

  // --- Try initializing Pool directly with the string if the previous way failed ---
  // Note: This might depend on the exact version of @neondatabase/serverless
  const pool = new Pool({ connectionString: connectionString }); // Keep original explicit way for now based on docs, error might be misleading.
  // If the above still errors, the next thing to try would be:
  // const pool = new Pool(connectionString); // Less common, but possible

  const adapter = new PrismaNeon(pool);
  // -------------------------------

  return new PrismaClient({
    adapter,
    log: ["error", "warn"],
  });
};

// Use the singleton pattern
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Store the instance in the global object during development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
