import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 8889,
        username: 'root',
        password: 'root',
        database: 'book_catalog',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],

        // WARNING: do not use in production
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
