import { Router } from "express";

// const controller;
// const responseHandler;
const userRouter = Router();

// User routes
userRouter.post("/");
userRouter.get("/");
userRouter.patch("/:id");
userRouter.delete("/:id");

export default userRouter;
