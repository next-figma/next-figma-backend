import mongoose, { Schema } from "mongoose";
import { ICountry } from "./country.types";

const countrySchema = new Schema<ICountry>({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

export const Country = mongoose.model<ICountry>("Country", countrySchema);
