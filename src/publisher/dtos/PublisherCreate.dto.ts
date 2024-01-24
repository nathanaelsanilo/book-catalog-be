import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PublisherCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  active: boolean;
}
