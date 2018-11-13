let mongoose = require('mongoose');

mongoose.promise = global.Promise;

export default async function connect(
  server: string = 'localhost',
  port: string = '27017',
  database: string = 'test'
) {
  try {
    await mongoose.connect(`mongodb://${server}:${port}/${database}`);
    console.log('Successfully connected to the database');
  } catch(err) {
    console.error('Error connecting to the database');
    console.error(err);
    throw err;
  }
}

