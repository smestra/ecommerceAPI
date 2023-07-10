import { users } from "../types/users.types";

import {
  createUsers,
  deleteUsersById,
  readUsers,
  readUsersById,
  readUsersByName,
  updateUsers,
} from "../data/users.data";
import { resolve } from "path";
import { rejects } from "assert";

const getUsers = (
  limit: string | undefined
): Promise<{ code: number; result: string | users[] }> => {
  return new Promise((resolve, reject) => {
    readUsers(limit as string)
      .then((response: users[]) => {
        const localUsersDB = response;
        resolve({ code: 200, result: localUsersDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getUsersById = (
  userId: string
): Promise<{ code: number; message: string | users }> => {
  return new Promise((resolve, reject) => {
    readUsersById(userId)
      .then((response) => {
        if ((response as users[]).length === 0) {
          resolve({ code: 404, message: "User does not exist" });
        } else {
          resolve({ code: 200, message: response as users });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const getUsersByName = (
  userName: string
): Promise<{ code: number; message: string | users }> => {
  return new Promise((resolve, reject) => {
    readUsersByName(userName)
      .then((response) => {
        if ((response as users[]).length === 0) {
          resolve({ code: 404, message: "User not found" });
        } else {
          resolve({ code: 200, message: response as users });
        }
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const postUsers = (body: users): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    createUsers(body)
      .then((response) => {
        resolve({ code: 201, message: response as string });
      })
      .catch((error) => {
        reject({ code: 500, message: "Unexpected error" });
      });
  });
};

const putUsers = (
  userId: string,
  body: users
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    updateUsers(userId, body)
      .then((response) => {
        if (response === 200)
          resolve({
            code: 200,
            message: "User updated successfully" as string,
          });
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "User not found" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

const deleteUsers = (
  userId: string
): Promise<{ code: number; message: string }> => {
  return new Promise((resolve, reject) => {
    deleteUsersById(userId)
      .then((response) => {
        if (response === 200) {
          resolve({ code: 200, message: "User removed successfully" });
        }
      })
      .catch((error) => {
        if (error === 404) {
          reject({ code: 404, message: "User does not exist" });
        } else {
          reject({ code: 500, message: "Unexpected error" });
        }
      });
  });
};

export {
  getUsers,
  getUsersById,
  getUsersByName,
  postUsers,
  putUsers,
  deleteUsers,
};
