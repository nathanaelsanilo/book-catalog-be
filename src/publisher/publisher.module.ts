import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { publisherProvider } from './providers/publisher.provider';

@Module({
  providers: [PublisherService, ...publisherProvider],
  controllers: [PublisherController],
})
export class PublisherModule {}
