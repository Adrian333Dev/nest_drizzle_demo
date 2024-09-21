import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { users } from 'src/users/users.schema';

export const posts = pgTable('posts', {
  postId: serial('post_id').primaryKey(),
  content: text('content'),
  published: boolean('published').default(false),
  timestamp: timestamp('timestamp').defaultNow(),
  userId: integer('user_id').references(() => users.userId),
});

export const postRelations = relations(posts, ({ one }) => ({
  user: one(users, { fields: [posts.userId], references: [users.userId] }),
}));
