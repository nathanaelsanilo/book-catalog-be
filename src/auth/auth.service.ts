import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  signup(dto: SignupDto) {
    return this.userService.createUser(dto);
  }
}
