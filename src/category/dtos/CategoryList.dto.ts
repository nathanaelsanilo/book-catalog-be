import { IsString } from 'class-validator';

export class CategoryListDto {
  @IsString()
  secureId: string;

  @IsString()
  name: string;
}
