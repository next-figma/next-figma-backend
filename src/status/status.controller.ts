import { Router, Request, Response } from "express";
import { StatusService } from "./status.service";

const router = Router();
const statusService = new StatusService();

router.get("/", async (req: Request, res: Response) => {
  try {
    const statuses = await statusService.getAllStatuses();
    res.status(200).json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch statuses" });
  }
});

export const statusRouter = router;
