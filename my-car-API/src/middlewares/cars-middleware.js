import {
  carList,
  moreModels,
  fewerModels,
  listUntilOrderCars,
  listUntilUnorderCars,
  listBrandCars
} from "../controllers/cars-controller.js";

async function sendList(controller, res) {
  try {
    const list = JSON.stringify(await controller());
    return res.send(list);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

async function sendListOrder(req, controller, res) {
  try {
    const { X } = req.params;
    const listSlice = JSON.stringify(await controller(X));
    res.send(listSlice);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

async function sendBrandCar(req, controller, res) {
  try {
    const { marca } = req.body;
    const brandList = JSON.stringify(await controller(marca));
    res.send(brandList);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

export async function getAllCars(req, res, next) {
  return await sendList(carList, res);
}

export async function getMoreModels(req, res, next) {
  return await sendList(moreModels, res);
}

export async function getFewerModels(req, res, next) {
  return await sendList(fewerModels, res);
}

export async function getOrdenedList(req, res, next) {
  return await sendListOrder(req, listUntilOrderCars, res);
}

export async function getUnordenedList(req, res, next) {
  return await sendListOrder(req, listUntilUnorderCars, res);
}

export async function getBrandCarsList(req, res, next) {
    return await sendBrandCar(req, listBrandCars, res)
}