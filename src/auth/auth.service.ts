import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { UserProviderKey } from 'src/user/constants';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { SigninDto, SigninResDto, SignupDto } from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,

    @Inject(UserProviderKey.UserRepository)
    private userRepository: Repository<User>,

    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(dto: SignupDto): Promise<void> {
    await this.userService.createUser(dto);
    return;
  }

  async signin(dto: SigninDto): Promise<SigninResDto> {
    const user = await this.userRepository.findOne({
      where: {
        username: dto.getUsername(),
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const pwMatches = await argon.verify(user.password, dto.getPassword(), {
      salt: this.configService.get('JWT_SECRET'),
    });

    if (!pwMatches) {
      throw new UnauthorizedException();
    }

    const data = {
      username: user.username,
      sub: user.id,
    };

    const token = await this.jwtService.signAsync(data, {
      expiresIn: '60m',
      secret: this.configService.get('JWT_SECRET'),
    });

    const response = new SigninResDto();
    response.setAccessToken(token);

    return response;
  }
}
