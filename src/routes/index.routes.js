import { Router } from "express";
import accommodationRouter from "./accommodation.routes.js";
import cityRouter from "./city.routes.js";
import ticketsRouter from "./tickets.routes.js";

const router = Router();

router.use(cityRouter);
router.use(accommodationRouter);
router.use(ticketsRouter);

export default router;