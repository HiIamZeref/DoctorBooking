import { Router } from "express";
import { AuthController } from "../src/controllers/authController";

// Init router
const authRouter = Router();

// Init controller
const controller = AuthController;

// Register a user
authRouter.post("/register", controller.register);

// Login a user
authRouter.post("/login", controller.login);

export default authRouter;
