import express, { Application as ExpressApplication } from 'express';
import { Server } from 'http';
import { checkRouter } from './controllers/check/router';

export interface Application<ApplicationType> {
  app: ApplicationType;
  close: () => Promise<void>;
  run: () => unknown;
}

const createServer = async (
  libraryManagementAppPort: string | number,
): Promise<Application<ExpressApplication>> => {
  const app = express();
  let server: Server | null = null;
  console.info(`Starting API on ${libraryManagementAppPort}...`);

  // MIDDLEWARES

  // ENDPOINTS
  app.use('/check', checkRouter);

  const close = (): Promise<void> => {
    return new Promise((resolve) => {
      server?.close(() => {
        console.log('HTTP server closed');
        resolve();
      });
    });
  };

  const run = () => {
    server = app.listen(libraryManagementAppPort, () => {
      console.log(
        `libraryManagementApp  listening on ${libraryManagementAppPort}`,
      );
      app.emit('listened');
    });

    process.on('uncaughtException', (error) => {
      console.error('Uncaught error received: ', error);
    });
    return server;
  };

  return { app, run, close };
};

export { createServer };
