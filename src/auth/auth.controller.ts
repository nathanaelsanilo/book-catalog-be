import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(new SignupDto(dto));
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(new SigninDto(dto));
  }
}
