import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import {
  PublisherCreateDto,
  PublisherDetailDto,
  PublisherListDto,
} from './dtos';
import { PublisherService } from './publisher.service';

@UseGuards(JwtAuthGuard)
@Controller('publisher')
export class PublisherController {
  constructor(private publisherService: PublisherService) {}

  @Get()
  getList(): Promise<PublisherListDto[]> {
    return this.publisherService.getList();
  }

  @Post()
  create(@Body() dto: PublisherCreateDto): Promise<PublisherDetailDto> {
    return this.publisherService.create(dto);
  }
}
