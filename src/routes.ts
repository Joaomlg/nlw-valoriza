import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };