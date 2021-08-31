import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(port, () => console.log("Server is running on localhost:3000"));