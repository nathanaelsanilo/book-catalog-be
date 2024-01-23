import { Provider } from '@nestjs/common';
import { DatabaseProviderKey } from 'src/database/constants';
import { DataSource } from 'typeorm';
import { PublisherProviderKey } from '../constants';
import { Publisher } from '../entity/publisher.entity';

export const publisherProvider: Provider[] = [
  {
    provide: PublisherProviderKey.PublisherRepository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Publisher),
    inject: [DatabaseProviderKey.DataSource],
  },
];
