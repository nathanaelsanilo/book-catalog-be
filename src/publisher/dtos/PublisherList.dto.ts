import { IsOptional, IsString } from 'class-validator';

export class PublisherListDto {
  @IsString()
  secureId: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  email: string;
}
