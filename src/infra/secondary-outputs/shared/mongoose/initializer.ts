import mongoose from 'mongoose';

export const initializeDatabaseConnection = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/library-management',
      {
        appName: 'library-management-app',
        dbName: 'library-management',
      },
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: DB not initizalized ${error}`);
    process.exit(1);
  }
};
