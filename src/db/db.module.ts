import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { DB_CONNECTION, DB_URL } from './db-connection';
import * as usersSchema from 'src/users/users.schema';

@Module({
  providers: [
    {
      provide: DB_CONNECTION,
      useFactory: (config: ConfigService) => {
        const pool = new Pool({
          connectionString: config.getOrThrow(DB_URL),
        });
        return drizzle(pool, {
          schema: {
            ...usersSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [DB_CONNECTION],
})
export class DbModule {}
