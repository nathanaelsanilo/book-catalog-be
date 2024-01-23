import { IsOptional, IsString } from 'class-validator';

export class PublisherListDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  email: string;
}
