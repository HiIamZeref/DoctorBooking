import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";

// Dotenv config
dotenv.config();

// Express app
const app = express();
const PORT = process.env.PORT || 3000;

//App setup
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send({ status: "ON", msg: "To ligado!" });
});

// Routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
