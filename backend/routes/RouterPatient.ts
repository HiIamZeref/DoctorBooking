import { Router } from "express";
import { PatientController } from "../src/controllers/patientController";

// Init router
const patientRouter = Router();

// Init controller
const controller = PatientController;

// Create a new patient
patientRouter.post("/", controller.create);

// List all patients
patientRouter.get("/", controller.list);

// Update a patient
patientRouter.patch("/:id", controller.update);

// Delete a patient
patientRouter.delete("/:id", controller.delete);

export default patientRouter;
