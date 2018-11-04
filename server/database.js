let mongoose = require('mongoose');

const server = 'localhost';
const database = 'test';

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
        console.error(err)
      });
  }
}

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

module.exports = new Database()
