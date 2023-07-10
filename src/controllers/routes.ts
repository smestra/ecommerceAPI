import express from "express";

import productsController from "./products.controllers";

import sellerController from "./sellers.controllers";

import ordersController from "./orders.controllers";

import usersControllers from "./users.controllers";

function routerApi(app: express.Application) {
  app.use("/products", productsController);
  app.use("/sellers", sellerController);
  app.use("/orders", ordersController);
  app.use("/users", usersControllers);
}

// function routerSeller(app: express.Application){
//   app.use("/sellers", sellerController );
// }

export {
  routerApi,
  //routerSeller
};
