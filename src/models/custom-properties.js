const MUUID = require('uuid-mongodb');

module.exports = {
  UUID: {
    type: Buffer,
    default: MUUID.v4,
    unique: true,
    set: uuid => { 
      if (uuid instanceof String) {
        return MUUID.from(uuid);
      } 
      else {
        return uuid;
      }
    }
  },
};