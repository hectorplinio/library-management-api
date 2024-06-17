import { User } from '@domain/users';

export interface UserRepository {
  createUser(username: string, password: string): Promise<User>;
  findUserByUsername(username: string): Promise<User>;
}
