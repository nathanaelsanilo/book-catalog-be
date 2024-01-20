import { IsString } from 'class-validator';

export class ListAuthorDto {
  @IsString()
  name = '';

  @IsString()
  email = '';

  @IsString()
  phone = '';

  @IsString()
  secureId = '';
}
