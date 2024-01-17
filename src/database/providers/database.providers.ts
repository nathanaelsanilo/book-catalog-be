import { DataSource } from 'typeorm';
import { DatabaseProviderKey } from '../constants';

export const databaseProviders = [
  {
    provide: DatabaseProviderKey.DataSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 8889,
        username: 'root',
        password: 'root',
        database: 'book_catalog',
        entities: [__dirname + '/../../**/entity/*.entity{.ts,.js}'],

        // WARNING: do not use in production
        synchronize: true,
      });
      return dataSource.initialize().then(async (ds) => {
        console.log('data source running!');
        return ds;
      });
    },
  },
];
