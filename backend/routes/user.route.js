const express = require("express");
const {
  getAllUsers,
  registerUser,
  userLogin,
} = require("../controllers/user.controller");

const userRoutes = express.Router();

// Route for retrieving all users
userRoutes.get("/", getAllUsers);

// Route for registering a new users
userRoutes.post("/register", registerUser);

// Route for user login
userRoutes.post("/login", userLogin);

module.exports = userRoutes;
