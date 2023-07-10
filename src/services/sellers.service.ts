import { sellers } from "../types/sellers.types";

import {
  readSeller,
  readSellerById,
  readSellerByName,
  createSeller,
  updateSeller,
  deleteSellerById,
} from "../data/sellers.data";

const getSeller = (
  limit: string | undefined
): Promise<{ code: number; result: string | sellers[] }> => {
  return new Promise((resolve, reject) => {
    readSeller(limit as string)
      .then((response: sellers[]) => {
        const localSellersDB = response;
        resolve({ code: 200, result: localSellersDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getSellerByID = (
  id: string
): Promise<{ code: number; message: string | sellers }> => {
  return new Promise((resolve, reject) => {
    readSellerById(id)
      .then((response) => {
        if ((response as sellers[]).length === 0) {
          resolve({ code: 404, message: "Seller does not exist" });
        } else {
          resolve({ code: 200, message: response as sellers });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getSellerByName = (
  sellerName: string
): Promise<{ code: number; message: string | sellers }> => {
  return new Promise((resolve, reject) => {
    readSellerByName(sellerName)
      .then((response) => {
        if ((response as sellers[]).length === 0) {
          resolve({ code: 404, message: "Seller does not exist" });
        } else {
          resolve({ code: 200, message: response as sellers });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const postSeller = (
  body: sellers
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    createSeller(body)
      .then((response) => {
        resolve({ code: 201, message: response as string });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const putSeller = (
  sellerId: string,
  body: sellers
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    updateSeller(sellerId, body)
      .then((response) => {
        if (response === 200)
          resolve({
            code: 200,
            message: "Seller updated successfully" as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Seller not found" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

const deleteSeller = (
  sellerId: string
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    deleteSellerById(sellerId)
      .then((response) => {
        if (response === 200) {
          resolve({ code: 200, message: "Seller removed successfully" });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Seller not found" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

export {
  getSeller,
  getSellerByID,
  getSellerByName,
  postSeller,
  putSeller,
  deleteSeller,
};
