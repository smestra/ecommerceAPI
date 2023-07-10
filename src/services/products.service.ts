import { products } from "../types/products.types";
import {
  readProducts,
  readProductsById,
  readProductsByName,
  createProducts,
  updateProducts,
  deleteProductsById,
} from "../data/products.data";

const getProducts = (
  limit: string | undefined
): Promise<{ code: number; result: string | products[] }> => {
  return new Promise((resolve, reject) => {
    readProducts(limit as string)
      .then((response: products[]) => {
        const localProductsDB = response;
        resolve({ code: 200, result: localProductsDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado " });
      });
  });
};

const getProductsById = (
  id: string
): Promise<{ code: number, message: string | products }> => {
  return new Promise((resolve, reject) => {
    readProductsById(id)
      .then((response) => {
        if ((response as products[]).length === 0) {
          resolve({ code: 404, message: " El producto no existe" });
        } else {
          resolve({ code: 200, message: response as products });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado" });
      });
  });
};

const getProductsByName = (
  productName: string
): Promise<{ code: number; message: string | products }> => {
  return new Promise((resolve, reject) => {
    readProductsByName(productName)
      .then((response) => {
        if ((response as products[]).length === 0) {
          resolve({ code: 404, message: "Producto no existente" });
        } else {
          resolve({ code: 200, message: response as products });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado" });
      });
  });
};

const postProducts = (
  body: products
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    createProducts(body)
      .then((response) => {
        resolve({ code: 201, message: response as string });
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado " });
      });
  });
};

const putProducts = (
  id: string,
  body: products
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    updateProducts(id, body)
      .then((response) => {
        if (response === 200)
          resolve({
            code: 200,
            message: "Producto actualizado con exito" as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Producto no encontrado" });
        } else {
          reject({ code: 500, message: "Error inesperado" });
        }
      });
  });
};

const deleteProducts = (
  id: string
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    deleteProductsById(id)
      .then((response) => {
        if (response === 200) {
          resolve({ code: 200, message: "Producto eliminado" });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Producto inexistente" });
        } else {
          reject({ code: 500, message: "Error inesperado" });
        }
      });
  });
};

export {
  getProducts,
  getProductsById,
  getProductsByName,
  postProducts,
  putProducts,
  deleteProducts,
};
