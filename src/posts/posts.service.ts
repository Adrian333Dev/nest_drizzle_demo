import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

import { DB_CONNECTION } from 'src/db/db-connection';
import * as schema from './posts.schema';
import { CreatePostInputType } from './posts.types';

@Injectable()
export class PostsService {
  constructor(
    @Inject(DB_CONNECTION) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async getPosts() {
    return this.db.query.posts.findMany();
  }

  async createPosts(dto: CreatePostInputType) {
    await this.db.insert(schema.posts).values(dto);
  }
}
