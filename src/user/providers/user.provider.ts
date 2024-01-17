import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserProviderKey } from '../constants';
import { DatabaseProviderKey } from 'src/database/constants';

export const userProviders: Provider[] = [
  {
    provide: UserProviderKey.UserRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DatabaseProviderKey.DataSource],
  },
];
