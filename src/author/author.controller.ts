import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CreateAuthorDto, DetailAuthorDto } from './dtos';
import { AuthorService } from './author.service';

@UseGuards(JwtAuthGuard)
@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  createAuthor(@Body() dto: CreateAuthorDto): Promise<DetailAuthorDto> {
    return this.authorService.createAuthor(dto);
  }
}
