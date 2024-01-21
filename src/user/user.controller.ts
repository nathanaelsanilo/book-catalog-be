import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from './decorators';
import { UserDetailResDto } from './dtos';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User): Promise<UserDetailResDto> {
    return this.userService.getMe(user);
  }
}
