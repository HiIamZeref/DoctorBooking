import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/*",
  dialect: "postgresql",
  dbCredentials: {
    url: (process.env.DB_URL as string) || "localhost:5432",
    database: process.env.DB_NAME || "doctorbooking",
    user: process.env.DB_USER,
  },
  verbose: true,
  strict: true,
});
