import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CategoryService } from './category.service';
import { CategoryCreateDto, CategoryDetailDto, CategoryListDto } from './dtos';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CategoryCreateDto): Promise<CategoryDetailDto> {
    return this.categoryService.create(dto);
  }

  @Get()
  getList(): Promise<CategoryListDto[]> {
    return this.categoryService.getList();
  }
}
