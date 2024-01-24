import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { PublisherService } from './publisher.service';
import { PublisherListDto } from './dtos';

@UseGuards(JwtAuthGuard)
@Controller('publisher')
export class PublisherController {
  constructor(private publisherService: PublisherService) {}

  @Get()
  getList(): Promise<PublisherListDto[]> {
    return this.publisherService.getList();
  }
}
