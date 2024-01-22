import { PartialType } from '@nestjs/swagger';
import { CategoryCreateDto } from './CategoryCreate.dto';

export class CategoryUpdateDto extends PartialType(CategoryCreateDto) {}
