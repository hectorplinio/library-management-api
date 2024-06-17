import { createServer } from './infra/shared/primary-inputs/express/server';

const PORT = 3000;

export const startApplication = async (): Promise<void> => {
  try {
    console.log('----- Running as SERVICE -----');
    (await createServer(PORT)).run();
  } catch (e: unknown) {
    console.log('StartApplication cannot run', e);
  }
};

startApplication();
