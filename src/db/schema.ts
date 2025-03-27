import { pgTable, uuid, varchar, date, integer } from "drizzle-orm/pg-core";

export const url = pgTable("url", {
  id: uuid("id").primaryKey().defaultRandom(),
  originalUrl: varchar("original_url", { length: 256 }).notNull(),
  shortCode: varchar("short_code", { length: 256 }).notNull(),
  createdAt: date("created_at").notNull().defaultNow(),
  visits: integer("visits").notNull().default(0),
});
