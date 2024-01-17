import { SignupDto } from 'src/auth/dtos';
import { User } from '../entity/user.entity';
import { DeepPartial } from 'typeorm';

export const mapSignupDtoToUser = (dto: SignupDto): DeepPartial<User> => ({
  password: dto.getPassword(),
  username: dto.getUsername(),
});
