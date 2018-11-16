import { Binary } from 'mongodb';
import uuidv4 from 'uuid/v4';
import { isUUID } from 'validator';

export function validate(uuid: string, strong: boolean = true) {
  const pattern = /^[0-9A-F]{12}4[0-9A-F]{3}[89AB][0-9A-F]{15}$/i
  if (pattern.test(uuid)) return true;
  if (strong) throw Error(`Invalid UUID.`);
  return false;
}

export function parse(uuid: string) {
  uuid = uuid.toLowerCase()
  validate(uuid)
  return new Binary(Buffer.from(uuid, 'hex'), Binary.SUBTYPE_UUID)
}

export function unparse(binaryUuid: Binary) {
  return binaryUuid.buffer.toString('hex')
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