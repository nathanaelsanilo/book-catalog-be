export class SigninDto {
  private username = '';
  private password = '';

  constructor(val?: SigninDto) {
    this.username = val?.username;
    this.password = val?.password;
  }

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
