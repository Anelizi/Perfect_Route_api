import { Router } from "express";
import { getAccommodation, getAccommodationId } from "../controllers/accommodation.controllers.js";

const accommodationRouter = Router();

accommodationRouter.get("/hotel", getAccommodation);
accommodationRouter.get("/hotel/:id", getAccommodationId);

export default accommodationRouter;