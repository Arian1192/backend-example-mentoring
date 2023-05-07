/**
 * @description Here in the userRouter we import our userController
 * and then we create the routes for use the CRUD methods.
 */

const express = require("express"); // We import express.
const {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController"); // We import the methods from the userController.
const isUserOnDatabase = require("../../../utils/middlewares/isUserOnDatabase");

const userRouter = express.Router(); // We create a new router.
// get Methods
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
// post Methods
userRouter.post("/", postUser);
// patch Methods
userRouter.patch("/:id", patchUser);
// delete Methods
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
