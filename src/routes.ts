import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAdmin, createTagController.handle);

const authenticateUserController = new AuthenticateUserController()
router.post("/login", authenticateUserController.handle);

const createComplimentController = new CreateComplimentController();
router.post("/compliments", createComplimentController.handle);

export { router };