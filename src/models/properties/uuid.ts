import { Binary } from 'mongodb';
import uuidv4 from 'uuid/v4';
import { isUUID } from 'validator';

export function validate(uuid: string, strong: boolean = true) {
  if (!isUUID(uuid, 4)) {
    if (strong) throw Error(`Invalid UUID.`);
    return false;
  } 
  return true;
}

export function parse(uuid: string) {
  uuid = uuid.toLowerCase()
  validate(uuid)
  uuid = uuid.replace(/-/g, '')
  return new Binary(Buffer.from(uuid, 'hex'), Binary.SUBTYPE_UUID)
}

export function unparse(binaryUuid: Binary) {
  const positions = [[0, 4], [4, 6], [6, 8], [8, 10], [10, 16]]
  return positions.map(pos => {
    binaryUuid.read(pos[0], pos[1]).toString('hex')
  }).join('-');
}

export function bsonUuid() {
  const uuid = uuidv4(null, new Buffer(16));
  return new Binary(uuid, Binary.SUBTYPE_UUID);
}

export const uuidProps = { 
  unique: true, 
  required: true, 
  default: bsonUuid
}

export default { validate, parse, unparse, bsonUuid, uuidProps }