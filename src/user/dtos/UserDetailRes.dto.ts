import { IsString } from 'class-validator';

export class UserDetailResDto {
  @IsString()
  private username: string;

  @IsString()
  private secureId: string;

  setUsername(val: string): this {
    this.username = val;
    return this;
  }

  getUsername(): string {
    return this.username;
  }

  setSecureId(val: string): this {
    this.secureId = val;
    return this;
  }

  getSecureId(): string {
    return this.secureId;
  }
}
