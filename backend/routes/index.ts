import { Router } from "express";
import patientRouter from "./RouterPatient";
import doctorRouter from "./RouterDoctor";

const router = Router();

router.use("/patient", patientRouter);
router.use("/doctor", doctorRouter);

export default router;
