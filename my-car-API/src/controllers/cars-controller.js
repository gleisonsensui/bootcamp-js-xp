import { promises as fsAsync } from "fs";
import { get } from "http";

// Reuse functions
async function getData() {
  try {
    const list = JSON.parse(
      await fsAsync.readFile("./src/data/car-list.json", "utf-8")
    );
    return list;
  } catch (error) {
    return error;
  }
}

async function getOrdenedCarList() {
  try {
    const listCar = await getData();
    const moreCarsModels = listCar
      .map((car) => {
        return { brand: car.brand, totalModels: car.models.length };
      })
      .sort((a, b) => b.totalModels - a.totalModels);
    return moreCarsModels;
  } catch (error) {
    return error;
  }
}

async function getUnordenedCarList() {
  try {
    const listCar = await getData();
    const fewerCarsModels = listCar
      .map((car) => {
        return { brand: car.brand, totalModels: car.models.length };
      })
      .sort((a, b) => a.totalModels - b.totalModels);
    return fewerCarsModels;
  } catch (error) {
    return error;
  }
}

// Controllers functions
export async function carList() {
  try {
    const listCar = await getData();
    return listCar;
  } catch (error) {
    return error;
  }
}

export async function moreModels() {
  try {
    const moreCarsData = await getOrdenedCarList();
    const filterMoreModels = moreCarsData.filter(
      (model) => model.totalModels === moreCarsData[0].totalModels
    );
    return filterMoreModels;
  } catch (error) {
    return error;
  }
}

export async function fewerModels() {
  try {
    const fewerCarsData = await getUnordenedCarList();
    const filterFewerModels = fewerCarsData.filter(
      (model) => model.totalModels === fewerCarsData[0].totalModels
    );
    return filterFewerModels;
  } catch (error) {
    return error;
  }
}

export async function listUntilOrderCars(X) {
  try {
    const moreCarsData = await getOrdenedCarList();
    const spliceCarsData = moreCarsData.splice(0, Number(X));
    return spliceCarsData;
  } catch (error) {
    return error;
  }
}

export async function listUntilUnorderCars(X) {
  try {
    const fewerCarsData = await getUnordenedCarList();
    const spliceCarsData = fewerCarsData.splice(0, Number(X));
    return spliceCarsData;
  } catch (error) {
    return error;
  }
}

export async function listBrandCars(marca) {
  try {
    const brandList = await getData();
    console.log(marca)
    const filterBrand = brandList.map((item) => {
      if (
        item.brand.toUpperCase() === marca.toUpperCase() ||
        item.brand.toLowerCase() === marca.toLowerCase() ||
        item.brand[0].toUpperCase() + item.brand.substring(1) ===
          marca[0].toUpperCase() + marca.substring(1)
      ) {
        return item.models;
      }
    });
    console.log(filterBrand)
    const filterModels = [];

    for (let index = 0; index < filterBrand.length; index++) {
      if (filterBrand[index] === undefined) {
        continue;
      } else {
        filterModels.push(filterBrand[index]);
      }
    }
    console.log(filterModels)
    return filterModels;
  } catch (error) {
    return error;
  }
}
