import { Router } from "express";
import { DoctorController } from "../src/controllers/DoctorController";

// Init router
const doctorRouter = Router();

// Init controller
const controller = DoctorController;

// Doctor routes
doctorRouter.post("/", controller.create);
doctorRouter.get("/", controller.list);
doctorRouter.patch("/:id", controller.update);
doctorRouter.delete("/:id", controller.delete);

export default doctorRouter;
