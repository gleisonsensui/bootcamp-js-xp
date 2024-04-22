import { Router } from "express";
import { queryCars } from "../middlewares/cars-middleware.js";

export const routers = Router();

routers.get('/', queryCars)





















