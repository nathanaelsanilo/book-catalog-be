import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { categoryProvider } from './providers/category.provider';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProvider],
})
export class CategoryModule {}
