import { Inject, Injectable } from '@nestjs/common';
import { SignupDto } from 'src/auth/dtos';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserProviderKey } from 'src/user/constants';
import { mapSignupDtoToUser } from './mappers';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserProviderKey.UserRepository)
    private userRepository: Repository<User>,
  ) {}

  async createUser(dto: SignupDto) {
    const hash = await argon.hash(dto.getPassword());
    const user = mapSignupDtoToUser(dto.setPassword(hash));
    await this.userRepository.save(user);
  }
}
