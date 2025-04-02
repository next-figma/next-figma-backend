import mongoose, { Schema } from "mongoose";
import { IDepartment } from "./department.types";

const departmentSchema = new Schema<IDepartment>({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

export const Department = mongoose.model<IDepartment>("Department", departmentSchema);
