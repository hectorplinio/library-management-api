import { CreateUser } from '@application/users/usecases/create.port';
import { Request, Response } from 'express';

export class CreateUserController {
  private createUser: CreateUser;

  constructor(createUser: CreateUser) {
    this.createUser = createUser;
  }

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const user = await this.createUser.execute(username, password);
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send('Error registering user');
    }
  }
}
