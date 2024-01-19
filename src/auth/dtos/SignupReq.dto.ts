import { IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  private username: string;

  @IsString()
  @IsNotEmpty()
  private password: string;

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
