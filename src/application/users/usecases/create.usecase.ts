import { CreateUser } from './create.port';
import { UserRepository } from '../repository.port';

export class CreateUserUseCase implements CreateUser {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(username: string, password: string) {
    return this.userRepository.createUser(username, password);
  }
}
