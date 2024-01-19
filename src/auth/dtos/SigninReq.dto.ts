import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @IsString()
  private username = '';

  @IsNotEmpty()
  @IsString()
  private password = '';

  setUsername(value: string): this {
    this.username = value;
    return this;
  }

  setPassword(value: string): this {
    this.password = value;
    return this;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}
