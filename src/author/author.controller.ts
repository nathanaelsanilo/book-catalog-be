import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { AuthorService } from './author.service';
import {
  CreateAuthorDto,
  DetailAuthorDto,
  ListAuthorDto,
  UpdateAuthorDto,
} from './dtos';

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

  @Patch(':authorSecureId')
  updateAuthor(
    @Body() dto: UpdateAuthorDto,
    @Param('authorSecureId') authorSecureId: string,
  ): Promise<DetailAuthorDto> {
    return this.authorService.update(authorSecureId, dto);
  }

  @Get(':secureId')
  getDetail(@Param('secureId') secureId: string): Promise<DetailAuthorDto> {
    return this.authorService.getDetail(secureId);
  }

  @Delete(':secureId')
  delete(@Param('secureId') secureId: string): Promise<DetailAuthorDto> {
    return this.authorService.deleteAuthor(secureId);
  }
}
