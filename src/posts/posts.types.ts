import * as schema from 'src/posts/posts.schema';

export type CreatePostInputType = typeof schema.posts.$inferInsert;
