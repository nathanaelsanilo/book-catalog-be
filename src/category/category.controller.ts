import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CategoryService } from './category.service';
import {
  CategoryCreateDto,
  CategoryDetailDto,
  CategoryListDto,
  CategoryUpdateDto,
} from './dtos';

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

  @HttpCode(HttpStatus.OK)
  @Get(':secureId')
  getDetail(@Param('secureId') secureId: string): Promise<CategoryDetailDto> {
    return this.categoryService.getDetail(secureId);
  }

  @Patch(':secureId')
  update(
    @Param('secureId') secureId: string,
    @Body() dto: CategoryUpdateDto,
  ): Promise<CategoryDetailDto> {
    return this.categoryService.update(secureId, dto);
  }
}
