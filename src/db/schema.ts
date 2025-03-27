import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const url = pgTable("url", {
  id: uuid("id").primaryKey().defaultRandom(),
  originalUrl: varchar("original_url", { length: 256 }).notNull(),
  shortCode: varchar("short_code", { length: 8 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  visits: integer("visits").notNull().default(0),
});
