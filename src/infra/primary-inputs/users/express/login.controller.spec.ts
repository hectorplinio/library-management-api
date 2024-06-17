import request from 'supertest';
import express, { Request, Response, NextFunction } from 'express';
import { LoginUserController } from './login.controller';
import { LoginUser } from '@application/users/usecases/login.port';

// Mock del caso de uso LoginUser
const mockLoginUserUseCase: jest.Mocked<LoginUser> = {
  execute: jest.fn(),
};

const loginUserController = new LoginUserController({
  loginUser: mockLoginUserUseCase,
});

const app = express();
app.use(express.json());

app.post('/login', (req: Request, res: Response, next: NextFunction) => {
  loginUserController.handle(req, res).catch(next);
});

describe('LoginUserController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 and a token when login is successful', async () => {
    const mockToken = 'mockToken';
    mockLoginUserUseCase.execute.mockResolvedValue({ token: mockToken });

    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ token: mockToken });
    expect(mockLoginUserUseCase.execute).toHaveBeenCalledWith(
      'testuser',
      'password123',
    );
  });

  it('should return 401 and an error message when login fails', async () => {
    mockLoginUserUseCase.execute.mockRejectedValue(
      new Error('Invalid credentials'),
    );

    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(401);
    expect(response.text).toBe('Invalid credentials');
    expect(mockLoginUserUseCase.execute).toHaveBeenCalledWith(
      'testuser',
      'password123',
    );
  });
});
