import { IStatus } from "@/status/status.types";
import { IDepartment } from "@/department/department.types";
import { ICountry } from "@/country/country.types";

export interface IUser {
  name: string;
  status: IStatus;
  department: IDepartment;
  country: ICountry;
}
