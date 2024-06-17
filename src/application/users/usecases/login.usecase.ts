import jwt from 'jsonwebtoken';
import { LoginUser } from './login.port';
import { UserRepository } from '@infra/secondary-outputs/users/mongoose/repository';

export class LoginUserUseCase implements LoginUser {
  private userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(username: string, password: string) {
    const user = await this.userRepository.findUserByUsername(username);
    if (!user || user.password != password) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.username }, 'your_jwt_secret', {
      expiresIn: '1h',
    });
    return { token };
  }
}
