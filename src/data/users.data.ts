import { rejects } from "assert";
import { usersDB } from "../../usersDB";
import { users } from "../types/users.types";

let localUsersDB = usersDB;

const readUsers = (limit: string): Promise<users[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localUsersDB);
    } catch (error) {
      reject(error);
    }
  });
};

const readUsersById = (userId: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localUsersDB.filter((item) => item.userId === userId);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const readUsersByName = (userName: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localUsersDB.filter((item) => item.userName === userName);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const createUsers = (body: users) => {
  return new Promise((resolve, reject) => {
    try {
      localUsersDB.push(body);
      resolve("User added successfully");
    } catch (error) {
      reject(error);
    }
  });
};

const updateUsers = (userId: string, body: users) => {
  return new Promise((resolve, reject) => {
    try {
      const usersIndex = localUsersDB.findIndex(
        (item) => item.userId === userId
      );
      if (usersIndex === -1) {
        reject(404);
      } else {
        localUsersDB[usersIndex] = body;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUsersById = (userId: string) => {
  return new Promise((resolve, reject) => {
    try {
      const result = localUsersDB.filter((item) => item.userId !== userId);
      if (result.length === localUsersDB.length) {
        reject(404);
      } else {
        localUsersDB = result;
        resolve(200);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export {
  readUsers,
  readUsersById,
  readUsersByName,
  createUsers,
  updateUsers,
  deleteUsersById,
};
