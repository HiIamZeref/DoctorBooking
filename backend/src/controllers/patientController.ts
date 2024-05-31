import { Request, Response } from "express";

export const PatientController = {
  list: async (req: Request, res: Response) => {
    res.send("List all patients");
  },
  create: async (req: Request, res: Response) => {
    res.send("Create a new patient");
  },
  update: async (req: Request, res: Response) => {
    res.send("Update a patient");
  },
  delete: async (req: Request, res: Response) => {
    res.send("Delete a patient");
  },
};
