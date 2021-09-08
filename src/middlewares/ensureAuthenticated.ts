import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export interface ITokenPayload {
  sub: string;
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const decoded = verify(token, "7fb391545b7ca20feae5ab0b07a4fc6b") as ITokenPayload;
    request.user_id = decoded.sub;
  } catch(err) {
    return response.status(401).end();
  }

  return next();
}