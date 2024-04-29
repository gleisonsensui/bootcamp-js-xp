import express from "express";
import { router } from "../src/routes/delivery.routes.js";
export const PORT_ENV = process.env | 3009;

export const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use('/delivery',router);
