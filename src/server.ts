import "reflect-metadata";
import express from "express";

import "./database";

const app = express();
const port = 3000;

app.listen(port, () => console.log('Server is running on localhost:3000'));