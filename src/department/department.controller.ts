import { Router, Request, Response } from "express";
import { DepartmentService } from "./department.service";

const router = Router();
const departmentService = new DepartmentService();

router.get("/", async (req: Request, res: Response) => {
  try {
    const departments = await departmentService.getAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch departments" });
  }
});

export const departmentRouter = router;
