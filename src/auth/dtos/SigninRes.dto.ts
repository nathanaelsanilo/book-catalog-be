export class SigninResDto {
  private access_token!: string;

  setAccessToken(value: string): this {
    this.access_token = value;
    return this;
  }

  getAccessToken(): string {
    return this.access_token;
  }
}
