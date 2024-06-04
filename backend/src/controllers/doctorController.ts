import { Request, Response } from "express";

export const DoctorController = {
  list: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "List all doctors",
    });
  },
  create: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "Create a new doctor",
    });
  },
  update: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "Update a doctor",
    });
  },
  delete: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "Delete a doctor",
    });
  },
};
