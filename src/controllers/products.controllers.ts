import express from "express";

import {
  getProducts,
  getProductsById,
  getProductsByName,
  postProducts,
  putProducts,
  deleteProducts,
} from "../services/products.service";

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const limit = req.query.limit;

    const response = await getProducts(limit as string);

    res.status(response.code).json({ result: response.result });
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getProductsById(id);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

router.get("/name/:name", async (req, res) => {
  try {
    const productName = req.params.name;
    const response = await getProductsByName(productName);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

router.post("", async function (req, res) {
  try {
    const body = req.body;

    const response = await postProducts(body);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

router.put("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    const response = await putProducts(id, body);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const response = await deleteProducts(id);

    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const productError = error as { code: number; message: string };
    res.status(productError.code).json(productError.message);
  }
});

export default router;
