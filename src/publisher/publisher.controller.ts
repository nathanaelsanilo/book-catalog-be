import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import {
  PublisherCreateDto,
  PublisherDetailDto,
  PublisherListDto,
  PublisherUpdateDto,
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

  @Get(':secureId')
  getDetail(@Param('secureId') secureId: string): Promise<PublisherDetailDto> {
    return this.publisherService.getDetail(secureId);
  }

  @Patch(':secureId')
  update(
    @Param('secureId') secureId: string,
    @Body() dto: PublisherUpdateDto,
  ): Promise<PublisherDetailDto> {
    return this.publisherService.update(secureId, dto);
  }
}
