import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/*",
  dialect: "postgresql",
  dbCredentials: {
    url: (process.env.DB_URL as string) || "random-url",
    database: process.env.DB_NAME || "drizzle",
    user: process.env.DB_USER,
  },
  verbose: true,
  strict: true,
});
