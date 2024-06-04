import { Router } from "express";
import { DoctorController } from "../src/controllers/doctorController";

// Init router
const doctorRouter = Router();

// Init controller
const controller = DoctorController;

// Create a new doctor
doctorRouter.post("/", controller.create);

// List all doctors
doctorRouter.get("/", controller.list);

// Update a doctor
doctorRouter.patch("/:id", controller.update);

// Delete a doctor
doctorRouter.delete("/:id", controller.delete);

export default doctorRouter;
