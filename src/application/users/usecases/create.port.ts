import { User } from '@domain/users';

export interface CreateUser {
  execute(username: string, password: string): Promise<User>;
}
