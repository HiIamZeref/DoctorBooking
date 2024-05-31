import { Request, Response } from "express";

export const DoctorController = {
  list: async (req: Request, res: Response) => {
    res.send("List all doctors");
  },
  create: async (req: Request, res: Response) => {
    res.send("Create a new doctor");
  },
  update: async (req: Request, res: Response) => {
    res.send("Update a doctor");
  },
  delete: async (req: Request, res: Response) => {
    res.send("Delete a doctor");
  },
};
