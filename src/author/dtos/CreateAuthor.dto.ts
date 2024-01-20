import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  private author_name: string = '';

  @IsNotEmpty()
  @IsEmail()
  private email: string = '';

  @IsNotEmpty()
  @IsString()
  private phone: string = '';

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
