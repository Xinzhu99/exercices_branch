import { integer } from "drizzle-orm/gel-core";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable ('users',  {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  created_at: timestamp('created_at').notNull().defaultNow(),
})


export const posts = pgTable ("posts", {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(()=> users.id, {onDelete:"cascade"}),
  content:text('content').notNull(),
})