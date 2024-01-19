import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { authorProviders } from './providers/author.provider';

@Module({
  providers: [AuthorService, ...authorProviders],
  controllers: [AuthorController],
})
export class AuthorModule {}
