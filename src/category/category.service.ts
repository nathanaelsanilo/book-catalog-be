import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryProviderKey } from './constants';
import { CategoryCreateDto, CategoryDetailDto, CategoryListDto } from './dtos';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CategoryProviderKey.CategoryRepository)
    private categoryRepository: Repository<Category>,
  ) {}

  private mapCategoryToDetail(entity: Category): CategoryDetailDto {
    const dto = new CategoryDetailDto();
    dto.description = entity.description;
    dto.name = entity.name;
    dto.secureId = entity.secureId;
    return dto;
  }

  /**
   * @description create new category
   */
  async create(dto: CategoryCreateDto): Promise<CategoryDetailDto> {
    const newCat = new Category();
    newCat.description = dto.description;
    newCat.name = dto.name;

    const saved = await this.categoryRepository.save(newCat);
    return this.mapCategoryToDetail(saved);
  }

  /**
   * @description get all category
   */
  async getList(): Promise<CategoryListDto[]> {
    const categories = await this.categoryRepository.find({
      order: { name: 'ASC' },
    });
    const dto: CategoryListDto[] = categories.map((item) => ({
      name: item.name,
      secureId: item.secureId,
    }));

    return dto;
  }

  /**
   * get detail category by secure id
   * @param secureId category secure id
   */
  async getDetail(secureId: string): Promise<CategoryDetailDto> {
    const category = await this.categoryRepository.findOne({
      where: { secureId },
    });

    return this.mapCategoryToDetail(category);
  }
}
