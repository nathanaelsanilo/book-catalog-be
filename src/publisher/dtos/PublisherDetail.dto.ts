import { IsBoolean, IsString } from 'class-validator';

export class PublisherDetailDto {
  @IsString()
  secureId: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  description: string;

  @IsBoolean()
  active: boolean;
}
