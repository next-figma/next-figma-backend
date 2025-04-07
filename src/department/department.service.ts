import { Department } from "./department.model";
import { IDepartment } from "./department.types";

export class DepartmentService {
  async getAllDepartments(): Promise<IDepartment[]> {
    return await Department.find();
  }
}
