export class UserDetailResDto {
  private username: string;

  constructor(val: UserDetailResDto) {
    this.username = val.username;
  }

  setUsername(val: string): this {
    this.username = val;
    return this;
  }
}
