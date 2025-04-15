import { Types } from "mongoose";
import { IStatus } from "@/status/status.types";
import { ICountry } from "@/country/country.types";
import { IDepartment } from "@/department/department.types";

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  status: IStatus;
  country: ICountry;
  department: IDepartment;
}
