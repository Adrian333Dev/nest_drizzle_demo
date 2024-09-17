import * as schema from 'src/users/users.schema';

export type CreateUserInputType = typeof schema.users.$inferInsert;
