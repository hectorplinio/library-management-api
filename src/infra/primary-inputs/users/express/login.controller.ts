import { LoginUser } from '@application/users/usecases/login.port';
import { Request, Response } from 'express';

export class LoginUserController {
  private loginUser: LoginUser;

  constructor({ loginUser }: { loginUser: LoginUser }) {
    this.loginUser = loginUser;
  }

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const { token } = await this.loginUser.execute(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).send('Invalid credentials');
    }
  }
}
