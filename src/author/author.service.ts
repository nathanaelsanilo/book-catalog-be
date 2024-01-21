import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorProviderKey } from './constants';
import {
  CreateAuthorDto,
  DetailAuthorDto,
  ListAuthorDto,
  UpdateAuthorDto,
} from './dtos';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(AuthorProviderKey.AuthorRepository)
    private authorRepository: Repository<Author>,
  ) {}

  mapAuthorToDetailDto(author: Author): DetailAuthorDto {
    const detail = new DetailAuthorDto();
    detail.setAuthorName(author.name);
    detail.setEmail(author.email);
    detail.setPhone(author.phone);
    detail.setSecureId(author.secureId);

    return detail;
  }

  async createAuthor(dto: CreateAuthorDto): Promise<DetailAuthorDto> {
    const author = new Author();
    author.name = dto.getAuthorName();
    author.email = dto.getEmail();
    author.phone = dto.getPhone();

    await this.authorRepository.save(author);

    const res = this.mapAuthorToDetailDto(author);

    return res;
  }

  async getList(): Promise<ListAuthorDto[]> {
    const authors = await this.authorRepository.find();
    const res = authors.map((e) => {
      const dto = new ListAuthorDto();
      dto.email = e.email;
      dto.name = e.name;
      dto.phone = e.phone;
      dto.secureId = e.secureId;
      return dto;
    });

    return res;
  }

  async update(
    authorSecureId: string,
    dto: UpdateAuthorDto,
  ): Promise<DetailAuthorDto> {
    const author = await this.authorRepository.findOneOrFail({
      where: {
        secureId: authorSecureId,
      },
    });

    author.email = dto.getEmail();
    author.name = dto.getAuthorName();
    author.phone = dto.getPhone();

    const saved = await this.authorRepository.save(author);

    const detail = this.mapAuthorToDetailDto(saved);

    return detail;
  }

  /**
   * get detail author by secure id
   * @param secureId author secure id
   */
  async getDetail(secureId: string): Promise<DetailAuthorDto> {
    const author = await this.authorRepository.findOneOrFail({
      where: {
        secureId,
      },
    });

    const detail = this.mapAuthorToDetailDto(author);

    return detail;
  }

  /**
   * @description delete author by secure id
   * @param secureId author secure id
   */
  async deleteAuthor(secureId: string): Promise<DetailAuthorDto> {
    const author = await this.authorRepository.findOneOrFail({
      where: {
        secureId,
      },
    });

    const removed = await this.authorRepository.remove(author);

    return this.mapAuthorToDetailDto(removed);
  }
}
