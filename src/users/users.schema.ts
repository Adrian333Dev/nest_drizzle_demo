import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { posts } from 'src/posts/posts.schema';

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  postId: integer('post_id').references(() => posts.postId),
});

export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));
