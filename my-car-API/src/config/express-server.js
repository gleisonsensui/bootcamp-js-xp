import express from 'express';
import { routers } from '../routes/cars.routes.js';

export const PORT_ENV = process.env | 3399;
export const server = express();

server.use(express.json());
server.use('/marcas', routers);






















