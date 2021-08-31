import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log("Server is running on localhost:3000"));