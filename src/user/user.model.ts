import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.types";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  status: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  department: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  country: {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
