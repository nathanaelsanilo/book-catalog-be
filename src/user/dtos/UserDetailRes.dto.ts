import { IsString } from 'class-validator';

export class UserDetailResDto {
  @IsString()
  private username: string;

  setUsername(val: string): this {
    this.username = val;
    return this;
  }

  getUsername(): string {
    return this.username;
  }
}
