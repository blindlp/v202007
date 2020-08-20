export interface IJSONWebToken {
  sign: <Payload = string | Buffer | object>(
    payload: Payload,
    options?: { expiresIn?: string }
  ) => string;
  verify: <Payload = string | object>(token: string) => object | string;
}
