export default interface IUser {
  email: string,
  password?: {
    hash: string,
    salt: string,
  },
  publicId: string,
  name?: {
    first: string,
    last: string
  },
  facebook?: {
    accessToken: string,
    refreshToken: string,
    id: string,
    dateAdded: Date
  },
  twitter?: {
    token: string, 
    tokenSecret: string,
    id: string,
    dateAdded: Date
  }
}