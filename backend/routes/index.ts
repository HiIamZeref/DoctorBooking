import { Router } from "express";
import userRouter from "./RouterPatient";

const router = Router();

router.use("/user", userRouter);
