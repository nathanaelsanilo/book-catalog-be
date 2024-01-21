import { Inject, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { SignupDto } from 'src/auth/dtos';
import { UserProviderKey } from 'src/user/constants';
import { Repository } from 'typeorm';
import { UserDetailResDto } from './dtos';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserProviderKey.UserRepository)
    private userRepository: Repository<User>,
  ) {}

  async createUser(dto: SignupDto) {
    const hash = await argon.hash(dto.getPassword());

    const user = new User();
    user.password = hash;
    user.username = dto.getUsername();

    const res = await this.userRepository.save(user);

    return res;
  }

  async getMe(user: User): Promise<UserDetailResDto> {
    const res = new UserDetailResDto();
    res.setUsername(user.username);
    res.setSecureId(user.secureId);

    return res;
  }
}
