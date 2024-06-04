import { Router } from "express";
import { AppointmentController } from "../src/controllers/appointmentController";

// Init router
const appointmentRouter = Router();

// Init controller
const controller = AppointmentController;

// Create a new appointment
appointmentRouter.post("/", controller.create);

// List all appointments
appointmentRouter.get("/", controller.list);

// Update an appointment
appointmentRouter.patch("/:id", controller.update);

// Delete an appointment
appointmentRouter.delete("/:id", controller.delete);

export default appointmentRouter;
