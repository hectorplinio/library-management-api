import request from 'supertest';
import express, { Request, Response, NextFunction } from 'express';
import { CreateUserController } from './create.controller';
import { CreateUser } from '@application/users/usecases/create.port';

const mockCreateUserUseCase: jest.Mocked<CreateUser> = {
  execute: jest.fn(),
};

const createUserController = new CreateUserController(mockCreateUserUseCase);

const app = express();
app.use(express.json());

app.post('/register', (req: Request, res: Response, next: NextFunction) => {
  createUserController.handle(req, res).catch(next);
});

describe('CreateUserController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 201 and the created user when successful', async () => {
    const mockUser = { username: 'testuser', password: 'hashedpassword' };
    mockCreateUserUseCase.execute.mockResolvedValue(mockUser);

    const response = await request(app)
      .post('/register')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockUser);
    expect(mockCreateUserUseCase.execute).toHaveBeenCalledWith(
      'testuser',
      'password123',
    );
  });

  it('should return 400 and an error message when an error occurs', async () => {
    mockCreateUserUseCase.execute.mockRejectedValue(
      new Error('Error registering user'),
    );

    const response = await request(app)
      .post('/register')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(400);
    expect(response.text).toBe('Error registering user');
    expect(mockCreateUserUseCase.execute).toHaveBeenCalledWith(
      'testuser',
      'password123',
    );
  });
});
