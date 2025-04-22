import { Router } from "express";
import {
	createCity,
	deleteCity,
	getAllCities,
	getCityById,
	getUserCity,
	updateCity,
} from "../controllers/city.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const cityRouter = Router();

cityRouter.post("/", authorize, createCity);

cityRouter.get("/", getAllCities);

cityRouter.get("/:id", getCityById);

cityRouter.get("/:id", authorize, getUserCity);

cityRouter.put("/:id", authorize, updateCity);

cityRouter.delete("/:id", authorize, deleteCity);

export default cityRouter;
