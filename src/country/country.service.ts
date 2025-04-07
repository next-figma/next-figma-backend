import { Country } from "./country.model";
import { ICountry } from "./country.types";

export class CountryService {
  async getAllCountries(): Promise<ICountry[]> {
    return await Country.find();
  }
}
