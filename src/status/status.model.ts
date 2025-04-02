import mongoose, { Schema } from "mongoose";
import { IStatus } from "./status.types";

const statusSchema = new Schema<IStatus>({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

export const Status = mongoose.model<IStatus>("Status", statusSchema);
