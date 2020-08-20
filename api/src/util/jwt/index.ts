import { Request } from "express";
import expressJWT from "express-jwt";
import jsonwebtoken from "jsonwebtoken";
import config from "../config";
import { IJSONWebToken } from "./interface/IJSONWebToken";

const { privateKey, publicKey, algorithm, audience, issuer } = config.get(
  "jwt"
);

function sign(payload, options = { expiresIn: "7days" }): string {
  return jsonwebtoken.sign(payload as any, Buffer.from(privateKey, "base64"), {
    algorithm,
    audience,
    issuer,
    expiresIn: "7days",
    ...options,
  });
}

function verify(token: string) {
  return jsonwebtoken.verify(token, Buffer.from(publicKey, "base64"), {
    issuer,
    audience,
    algorithms: [algorithm],
  });
}

function getTokenFromRequest({
  headers: { authorization },
  query,
  cookies,
}: Request) {
  if (authorization && authorization.startsWith("Bearer")) {
    return authorization.replace("Bearer ", "");
  }

  if (query && query.token) {
    return query.token;
  }

  if (cookies && cookies.token) {
    return cookies.token;
  }
}

export const jwtMiddleware = expressJWT({
  credentialsRequired: false,
  userProperty: "auth",
  audience,
  algorithms: [algorithm],
  secret: Buffer.from(privateKey, "base64"),
  getToken: getTokenFromRequest,
});

export const jwt: IJSONWebToken = {
  sign,
  verify,
};

export default jwt;
