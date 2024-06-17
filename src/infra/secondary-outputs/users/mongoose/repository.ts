import { UserEntity } from './entity';

export class UserRepository {
  async createUser(username: string, password: string) {
    const user = new UserEntity({ username, password });
    return await user.save();
  }

  async findUserByUsername(username: string) {
    return await UserEntity.findOne({ username });
  }
}
