import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectToDatabase } from "./db";
import { userRouter } from "./user/user.controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4200;

async function main() {
  app.use(cors());
  app.use(express.json());

  await connectToDatabase();

  app.use("/api/users", userRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
