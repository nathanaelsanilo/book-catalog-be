import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Publisher } from './entity/publisher.entity';
import { PublisherProviderKey } from './constants';
import { PublisherListDto } from './dtos';

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

      return dto;
    });

    return dtos;
  }
}
