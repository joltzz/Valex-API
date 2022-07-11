import { Router } from "express";
import cardRouter from "./cardRouter.js";

const router: Router = Router();

router.use(cardRouter);

export default router;