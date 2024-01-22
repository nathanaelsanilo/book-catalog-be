import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CategoryService } from './category.service';
import { CategoryCreateDto, CategoryDetailDto } from './dtos';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CategoryCreateDto): Promise<CategoryDetailDto> {
    return this.categoryService.create(dto);
  }
}
