import { Inject, Injectable } from '@nestjs/common';
import { SignupDto } from 'src/auth/dtos';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserProviderKey } from 'src/user/constants';
import { mapSignupDtoToUser } from './mappers';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserProviderKey.UserRepository)
    private userRepository: Repository<User>,
  ) {}

  createUser(dto: SignupDto) {
    const user = mapSignupDtoToUser(dto);
    this.userRepository.create(user);
  }
}
