import express from "express";

import {
  deleteUsers,
  getUsers,
  getUsersById,
  getUsersByName,
  postUsers,
  putUsers,
} from "../services/users.service";

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const limit = req.query.limit;
    const response = await getUsers(limit as string);
    res.status(response.code).json({ result: response.result });
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await getUsersById(userId);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

router.get("/name/:name", async (req, res) => {
  try {
    const userName = req.params.name;
    const response = await getUsersByName(userName);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

router.post("", async function (req, res) {
  try {
    const body = req.body;
    const response = await postUsers(body);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

router.put("/:id", async function (req, res) {
  try {
    const userId = req.params.id;
    const body = req.body;
    const response = await putUsers(userId, body);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const userId = req.params.id;
    const response = await deleteUsers(userId);
    res.status(response.code).json(response.message);
  } catch (error) {
    console.log(error);
    const usersError = error as { code: number; message: string };
    res.status(usersError.code).json(usersError.message);
  }
});

export default router;
