import { CreateUserUseCase } from '@application/users/usecases/create.usecase';
import { LoginUserUseCase } from '@application/users/usecases/login.usecase';
import { CreateUserController } from '@infra/primary-inputs/users/express/create.controller';
import { LoginUserController } from '@infra/primary-inputs/users/express/login.controller';
import { UserRepository } from '@infra/secondary-outputs/users/mongoose/repository';
import { asClass, createContainer } from 'awilix';

const container = createContainer();

container.register({
  createUser: asClass(CreateUserUseCase).singleton(),
  createUserController: asClass(CreateUserController).singleton(),
  userRepository: asClass(UserRepository).singleton(),
  loginUser: asClass(LoginUserUseCase).singleton(),
  loginUserController: asClass(LoginUserController).singleton(),
});

export { container };
