import { DataSource } from 'typeorm';
import { DatabaseProviderKey } from '../constants';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    inject: [ConfigService],
    provide: DatabaseProviderKey.DataSource,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: 8889,
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
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
