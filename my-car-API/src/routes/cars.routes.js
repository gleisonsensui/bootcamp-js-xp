import { Router } from "express";
import { getAllCars, getMoreModels, getFewerModels, getOrdenedList, getUnordenedList, getBrandCarsList} from "../middlewares/cars-middleware.js";


export const routers = Router();

routers.get('/', getAllCars)
routers.get('/maisModelos', getMoreModels)
routers.get('/menosModelos', getFewerModels)
routers.get('/listaMaisModelos/:X', getOrdenedList)
routers.get('/listaMenosModelos/:X', getUnordenedList)
routers.post('/listaModelos', getBrandCarsList)

















