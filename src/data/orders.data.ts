import { ordersDB } from "../../ordersDB";
import { orders } from "../types/orders.types";

let localOrdersDB = ordersDB;


const readOrders = (limit: string): Promise<orders[]> => {
return new Promise((resolve, reject)=> {
try {
   resolve(localOrdersDB);
} catch (error) {
    reject(error);
}
});
};


const readOrdersById = (orderId: string) =>  {
    return new Promise((resolve, reject)=>{
try {
    const result = localOrdersDB.filter((item) => item.orderId === orderId);
    resolve(result);
} catch (error) {
    reject(error);
}

    });
};


const readOrdersByDate = (date: string) => {
return new Promise((resolve, reject) => {
try {
    const result = localOrdersDB.filter((item) => item.date === date);
    resolve(result);
} catch (error) { reject(error);
}
});
};


const createOrders = (body: orders) => {
    return new Promise((resolve, reject)=>{
        try {
            localOrdersDB.push(body);
            resolve("Order added successfully");
        } catch (error) {
            reject(error);
        }
    });
};

const updateOrders = (orderId: string, body: orders) => {
    return new Promise((resolve, reject)=>{
        try {
            const ordersIndex = localOrdersDB.findIndex((item)=> item.orderId === orderId);
            if (ordersIndex === -1) {
               reject(404);
            } else {
                localOrdersDB[ordersIndex] = body;
                resolve(200);
            }
        } catch (error) {
            reject(error);

        };
    });
};

const deleteOrdersById = (orderId: string) => {
    return new Promise((resolve, reject)=> {
        try {
            const result = localOrdersDB.filter((item)=> item.orderId !== orderId);
            if (result.length === localOrdersDB.length) {
                reject(404);
            } else {
                localOrdersDB = result;
                resolve(200);
            }
        } catch (error) {
            reject(error);
        }
    });
};

export { readOrders, readOrdersByDate, readOrdersById, createOrders, updateOrders, deleteOrdersById

};