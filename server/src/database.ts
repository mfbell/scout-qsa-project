let mongoose = require('mongoose');

mongoose.promise = global.Promise;

export default async function connect(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log('Successfully connected to the database');
  } catch(err) {
    console.error('Error connecting to the database');
    console.error(err);
    throw err;
  }

  // May need to import all models???
}

