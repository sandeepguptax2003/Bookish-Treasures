const express = require("express");
const {
  getAllbooks,
  getBookDetails,
} = require("../controllers/book.controller");

const bookRoutes = express.Router();

//Route for retrieving all books
bookRoutes.get("/", getAllbooks);

//Route for retrieving details of a specific book
bookRoutes.get("/:id", getBookDetails);

module.exports = bookRoutes;
