import MUUID from 'uuid-mongodb';

const UUID = {
  type: Buffer,
  default: MUUID.v4,
  unique: true,
  set: (uuid: MUUID.v4) => { 
    if (uuid instanceof String) {
      return MUUID.from(uuid);
    } 
    else {
      return uuid;
    }
  }
}

export { UUID };