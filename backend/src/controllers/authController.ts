// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    res.status(201).json({
      message: "Register a user",
    });
  },
  login: async (req: Request, res: Response) => {
    res.status(200).json({
      message: "Login a user",
    });
  },
};
