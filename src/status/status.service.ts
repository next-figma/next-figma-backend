import { Status } from "./status.model";
import { IStatus } from "./status.types";

export class StatusService {
  async getAllStatuses(): Promise<IStatus[]> {
    return await Status.find();
  }
}
