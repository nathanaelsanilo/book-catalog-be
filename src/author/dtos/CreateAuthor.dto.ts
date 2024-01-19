import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  private author_name: string = '';

  setAuthorName(val: string): this {
    this.author_name = val;
    return this;
  }

  getAuthorName(): string {
    return this.author_name;
  }
}
