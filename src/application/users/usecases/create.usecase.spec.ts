import { UserRepository } from '../repository.port';
import { CreateUserUseCase } from './create.usecase';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = {
      createUser: jest.fn(),
      findUserByUsername: jest.fn(),
    } as UserRepository;
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it('should call createUser on the repository with the correct parameters', async () => {
    const username = 'testuser';
    const password = 'password123';

    await createUserUseCase.execute(username, password);

    expect(userRepository.createUser).toHaveBeenCalledWith(username, password);
  });

  it('should return the created user', async () => {
    const username = 'testuser';
    const password = 'password123';
    const createdUser = { username, password };

    (userRepository.createUser as jest.Mock).mockResolvedValue(createdUser);

    const result = await createUserUseCase.execute(username, password);

    expect(result).toEqual(createdUser);
  });
});
