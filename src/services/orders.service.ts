import { orders } from "../types/orders.types";

import {
  readOrders,
  readOrdersByDate,
  readOrdersById,
  createOrders,
  updateOrders,
  deleteOrdersById, //updateOrders, deleteOrdersById,
} from "../data/orders.data";

const getOrders = (
  limit: string | undefined
): Promise<{ code: number; result: string | orders[] }> => {
  return new Promise((resolve, reject) => {
    readOrders(limit as string)
      .then((response: orders[]) => {
        const localOrdersDB = response;
        resolve({ code: 200, result: localOrdersDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getOrdersById = (
  orderId: string
): Promise<{ code: number; message: string | orders }> => {
  return new Promise((resolve, reject) => {
    readOrdersById(orderId)
      .then((response) => {
        if ((response as orders[]).length === 0) {
          resolve({ code: 404, message: "Order does not exist" });
        } else {
          resolve({ code: 200, message: response as orders });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getOrdersByDate = (
  date: string
): Promise<{ code: number; message: string | orders }> => {
  return new Promise((resolve, reject) => {
    readOrdersByDate(date)
      .then((response) => {
        if ((response as orders[]).length === 0) {
          resolve({ code: 404, message: "Order does not exist" });
        } else {
          resolve({ code: 200, message: response as orders });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const postOrder = (
  body: orders
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    createOrders(body)
      .then((response) => {
        resolve({ code: 201, message: response as string });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const putOrders = (
  orderId: string,
  body: orders
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    updateOrders(orderId, body)
      .then((response) => {
        if (response === 200)
          resolve({
            code: 200,
            message: "Order update successfully " as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Order not found" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

const deleteOrders = (
  orderId: string
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    deleteOrdersById(orderId)
      .then((response) => {
        if (response === 200) {
          resolve({ code: 200, message: "Order deleted successfully" });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "Order not found" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

export {
  getOrders,
  getOrdersById,
  getOrdersByDate,
  postOrder,
  putOrders,
  deleteOrders,
};
