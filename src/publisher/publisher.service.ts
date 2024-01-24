import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PublisherProviderKey } from './constants';
import {
  PublisherCreateDto,
  PublisherDetailDto,
  PublisherListDto,
} from './dtos';
import { Publisher } from './entity/publisher.entity';

@Injectable()
export class PublisherService {
  constructor(
    @Inject(PublisherProviderKey.PublisherRepository)
    private publisherRepository: Repository<Publisher>,
  ) {}

  /**
   * @description get list publishers
   */
  async getList(): Promise<PublisherListDto[]> {
    const publisher: Publisher[] = await this.publisherRepository.find();
    const dtos: PublisherListDto[] = publisher.map<PublisherListDto>((e) => {
      const dto = new PublisherListDto();
      dto.email = e.email;
      dto.name = e.name;
      dto.secureId = e.secureId;

      return dto;
    });

    return dtos;
  }

  mapPublisherToDetail(entity: Publisher): PublisherDetailDto {
    const dto = new PublisherDetailDto();
    dto.active = entity.active;
    dto.description = entity.description;
    dto.email = entity.email;
    dto.name = entity.name;
    dto.secureId = entity.secureId;

    return dto;
  }

  async create(dto: PublisherCreateDto) {
    const ent = new Publisher();
    ent.active = dto.active;
    ent.description = dto.description;
    ent.email = dto.email;
    ent.name = dto.name;
    const saved = await this.publisherRepository.save(ent);

    return this.mapPublisherToDetail(saved);
  }
}
