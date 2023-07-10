import { sellersDB } from "../../sellersDB";
import { sellers } from "../types/sellers.types";

let localSellersDB = sellersDB;

const readSeller = (limit: string): Promise<sellers[]>=> {
    return new Promise((resolve, reject)=>{
        try {
resolve(localSellersDB);
        } catch (error) {
            reject(error);
        }
    });
};

const readSellerById = (id: string) => {
    return new Promise((resolve, reject)=>{
        try {
            const result = localSellersDB.filter((item)=> item.id === id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

const readSellerByName = (sellerName: string) => {
    return new Promise((resolve, reject) => {
        try {
            const result = localSellersDB.filter((item) => item.name === sellerName);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

const createSeller = (body: sellers) => {
    return new Promise((resolve, reject)=> {
        try {
         localSellersDB.push(body);
         resolve("Seller added successfully");
        } catch (error) {
            reject(error);
        }
    });
};

const updateSeller = (id: string, body: sellers) => {
    return new Promise((resolve, reject) => {

try {
    const sellerIndex = localSellersDB.findIndex((item)=> item.id === id);
    if (sellerIndex === -1) {
        reject(404);
    } else {
        localSellersDB[sellerIndex] = body;
        resolve(200);
    }
} catch (error) {
    reject(error);
}
});
};

const deleteSellerById = (id: string)=>{
  return new Promise((resolve, reject) => {
    try {
       const result = localSellersDB.filter((item) => item.id !== id);
       if (result.length === localSellersDB.length) {
        reject(404);
            } else {
                localSellersDB = result;
                resolve(200);
       }
    } catch (error) {
        reject(error);
    }
});
};

export {
readSeller,
readSellerById,
readSellerByName,
createSeller,
updateSeller,
deleteSellerById,
};