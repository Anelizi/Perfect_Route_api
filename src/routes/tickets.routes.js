import { Router } from "express";
import { getFlights, getFlightsId } from "../controllers/tickets.controllers.js";

const ticketsRouter = Router();

ticketsRouter.get("/flights", getFlights);
ticketsRouter.get("/flights/:id", getFlightsId);

export default ticketsRouter;