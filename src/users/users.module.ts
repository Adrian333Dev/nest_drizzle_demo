import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
