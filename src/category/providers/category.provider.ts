import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatabaseProviderKey } from 'src/database/constants';
import { CategoryProviderKey } from '../constants';
import { Category } from '../entity/category.entity';

export const categoryProvider: Provider[] = [
  {
    provide: CategoryProviderKey.CategoryRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: [DatabaseProviderKey.DataSource],
  },
];
