import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

import { DB_CONNECTION } from 'src/db/db-connection';
import * as schema from 'src/users/users.schema';
import { CreateUserInputType } from './users.types';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB_CONNECTION) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getUsers() {
    return this.db.query.users.findMany();
  }

  async createUsers(dto: CreateUserInputType) {
    await this.db.insert(schema.users).values(dto);
  }
}
