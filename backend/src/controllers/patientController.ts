import { Request, Response } from "express";

export const PatientController = {
  list: async (req: Request, res: Response) => {
    res.status(200).json({
      message: "List of patients",
    });
  },
  create: async (req: Request, res: Response) => {
    res.status(201).json({
      message: "Create a patient",
    });
  },
  update: async (req: Request, res: Response) => {
    res.status(200).json({
      message: "Update a patient",
    });
  },
  delete: async (req: Request, res: Response) => {
    res.status(200).json({
      message: "Delete a patient",
    });
  },
};
