import { Router } from "express";
import { getCity, getCityId } from "../controllers/city.controllers.js";

const cityRouter = Router();

cityRouter.post("/citys",)
cityRouter.get("/citys", getCity);
cityRouter.get("/city/:id", getCityId);

export default cityRouter;