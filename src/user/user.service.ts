import { Inject, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { SignupDto } from 'src/auth/dtos';
import { UserProviderKey } from 'src/user/constants';
import { Repository } from 'typeorm';
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
}
