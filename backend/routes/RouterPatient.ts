import { Router } from "express";
import { PatientController } from "../src/controllers/PatientController";

// Init router
const patientRouter = Router();

// Init controller
const controller = PatientController;

// Patient routes
patientRouter.post("/", controller.create);
patientRouter.get("/", controller.list);
patientRouter.patch("/:id", controller.update);
patientRouter.delete("/:id", controller.delete);

export default patientRouter;
