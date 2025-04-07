import { Router, Request, Response } from "express";
import { UserService } from "./user.service";

const router = Router();
const userService = new UserService();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

export const userRouter = router;
