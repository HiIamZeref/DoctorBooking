import { Router } from "express";
import patientRouter from "./RouterPatient";
import doctorRouter from "./RouterDoctor";
import appointmentRouter from "./RouterAppointment";
import authRouter from "./RouterAuth";

const router = Router();

// Patient routes
router.use("/patient", patientRouter);

// Doctor routes
router.use("/doctor", doctorRouter);

// Appointment routes
router.use("/appointment", appointmentRouter);

// Auth routes
router.use("/auth", authRouter);

export default router;
