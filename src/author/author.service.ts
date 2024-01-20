import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorProviderKey } from './constants';
import { CreateAuthorDto, DetailAuthorDto, ListAuthorDto } from './dtos';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject(AuthorProviderKey.AuthorRepository)
    private authorRepository: Repository<Author>,
  ) {}

  async createAuthor(dto: CreateAuthorDto): Promise<DetailAuthorDto> {
    const author = new Author();
    author.name = dto.getAuthorName();
    author.email = dto.getEmail();
    author.phone = dto.getPhone();

    await this.authorRepository.save(author);

    const res = new DetailAuthorDto();
    res.setAuthorName(author.name);
    res.setEmail(author.email);
    res.setPhone(author.phone);

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
}
