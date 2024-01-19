import { Provider } from '@nestjs/common';
import { AuthorProviderKey } from 'src/author/constants';
import { DatabaseProviderKey } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { Author } from '../entity/author.entity';

export const authorProviders: Provider[] = [
  {
    provide: AuthorProviderKey.AuthorRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Author),
    inject: [DatabaseProviderKey.DataSource],
  },
];
