import { Request, Response } from "express";

export const AppointmentController = {
  list: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "List all appointments",
    });
  },
  create: async (req: Request, res: Response) => {
    res.status(201).json({
      status: "OK",
      msg: "Create a new appointment",
    });
  },
  update: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "Update an appointment",
    });
  },
  delete: async (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      msg: "Delete an appointment",
    });
  },
};
