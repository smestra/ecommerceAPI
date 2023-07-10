import { productsDB } from "../../productsDB";
import { products } from "../types/products.types";

let localProductsDB = productsDB;

const readProducts = (limit: string): Promise<products[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localProductsDB);
    } catch (error) {
      reject(error);
    }
  });
};

const readProductsById = (id: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localProductsDB.filter((item) => item.id === id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const readProductsByName = (productName: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localProductsDB.filter(
        (item) => item.productName === productName
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const createProducts = (body: products) => {
  return new Promise((resolve, reject) => {
    try {
      localProductsDB.push(body);
      resolve("Se ha agregado un producto");
    } catch (error) {
      reject(error);
    }
  });
};

const updateProducts = (id: string, body: products) => {
  return new Promise((resolve, reject) => {
    try {
      const productsIndex = localProductsDB.findIndex((item) => item.id === id);
      if (productsIndex === -1) {
        reject(404);
      } else {
        localProductsDB[productsIndex] = body;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteProductsById = (id: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localProductsDB.filter((item) => item.id !== id);
      if (result.length === localProductsDB.length) {
        reject(404);
      } else {
        localProductsDB = result;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {
  readProducts,
  readProductsById,
  readProductsByName,
  createProducts,
  updateProducts,
  deleteProductsById,
};
