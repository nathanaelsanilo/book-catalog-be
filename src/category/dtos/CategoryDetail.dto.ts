import { IsString } from 'class-validator';

export class CategoryDetailDto {
  @IsString()
  secureId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;
}
