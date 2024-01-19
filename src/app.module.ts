import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 8889,
    //   username: 'root',
    //   password: 'root',
    //   database: 'book_catalog',
    //   entities: [],

    //   // WARNING: do not use in production
    //   synchronize: true,

    //   autoLoadEntities: true,
    // }),
    DatabaseModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
