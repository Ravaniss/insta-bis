import * as argon2 from 'argon2'

export class Password {
  public static hash (password: string) {
    return argon2.hash(password)
  }

  public static compare (hash: any, password: string) {
    return argon2.verify(hash, password)
  }
}
