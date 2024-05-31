import { pgTable, serial, uuid, varchar } from "drizzle-orm/pg-core";

export const PacientTable = pgTable("patient", {
  id: serial("id").primaryKey(),
  publicId: uuid("public_id").defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});
