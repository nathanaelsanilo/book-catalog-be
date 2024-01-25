import { PartialType } from '@nestjs/swagger';
import { PublisherCreateDto } from './PublisherCreate.dto';

export class PublisherUpdateDto extends PartialType(PublisherCreateDto) {}
