import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorDto {
  @IsOptional()
  @IsString()
  private author_name?: string = '';

  @IsOptional()
  @IsEmail()
  private email?: string = '';

  @IsOptional()
  @IsString()
  private phone?: string = '';

  setAuthorName(val: string): this {
    this.author_name = val;
    return this;
  }

  getAuthorName(): string {
    return this.author_name;
  }

  setPhone(val: string): this {
    this.phone = val;
    return this;
  }

  getPhone(): string {
    return this.phone;
  }

  setEmail(val: string): this {
    this.email = val;
    return this;
  }

  getEmail(): string {
    return this.email;
  }
}
