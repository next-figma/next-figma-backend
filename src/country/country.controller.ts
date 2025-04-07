import { Router, Request, Response } from "express";
import { CountryService } from "./country.service";

const router = Router();
const countryService = new CountryService();

router.get("/", async (req: Request, res: Response) => {
  try {
    const countries = await countryService.getAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch countries" });
  }
});

export const countryRouter = router;
