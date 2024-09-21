import { Module } from '@nestjs/common';

import { DbModule } from 'src/db/db.module';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [DbModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
