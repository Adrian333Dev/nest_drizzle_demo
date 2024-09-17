import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
});
