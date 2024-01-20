import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { AuthorService } from './author.service';
import { CreateAuthorDto, DetailAuthorDto, ListAuthorDto } from './dtos';

@UseGuards(JwtAuthGuard)
@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  createAuthor(@Body() dto: CreateAuthorDto): Promise<DetailAuthorDto> {
    return this.authorService.createAuthor(dto);
  }

  @Get()
  getList(): Promise<ListAuthorDto[]> {
    return this.authorService.getList();
  }
}
