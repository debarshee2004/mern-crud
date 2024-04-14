// Importing the Express framework and the Book model
import express from "express";
import { Book } from "../models/bookModel.js";

// Creating an Express router
const router = express.Router();

// Route for saving a new Book to the Database
router.post("/", async (request, response) => {
  try {
    // Checking if all required fields are provided in the request body
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      // If any required field is missing, return a 400 Bad Request status with a message
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    // Creating a new book object from the request body
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    // Saving the new book to the database using the Book model
    const book = await Book.create(newBook);

    // Returning a 201 Created status along with the newly created book object
    return response.status(201).send(book);
  } catch (error) {
    // Catching any errors that occur during the process and sending a 500 Internal Server Error status with an error message
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for getting all the Books from the database
router.get("/", async (request, response) => {
  try {
    // Finding all books in the database using the Book model
    const books = await Book.find({});

    // Returning a 200 OK status along with a JSON response containing the count of books and an array of book objects
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    // Catching any errors that occur during the process and sending a 500 Internal Server Error status with an error message
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for getting one Book from the database by id
router.get("/:id", async (request, response) => {
  try {
    // Extracting the book id from the request parameters
    const { id } = request.params;

    // Finding a book in the database by its id using the Book model
    const book = await Book.findById(id);

    // Returning a 200 OK status along with a JSON response containing the book object
    return response.status(200).json(book);
  } catch (error) {
    // Catching any errors that occur during the process and sending a 500 Internal Server Error status with an error message
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for updating a Book in the Database
router.put("/:id", async (request, response) => {
  try {
    // Checking if all required fields are provided in the request body
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      // If any required field is missing, return a 400 Bad Request status with a message
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    // Extracting the book id from the request parameters
    const { id } = request.params;

    // Updating the book in the database with the provided id using the Book model
    const result = await Book.findByIdAndUpdate(id, request.body);

    // If the book is not found, return a 404 Not Found status
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    // If the update is successful, return a 200 OK status with a success message
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    // Catching any errors that occur during the process and sending a 500 Internal Server Error status with an error message
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deleting a book from the Database
router.delete("/:id", async (request, response) => {
  try {
    // Extracting the book id from the request parameters
    const { id } = request.params;

    // Deleting the book from the database with the provided id using the Book model
    const result = await Book.findByIdAndDelete(id);

    // If the book is not found, return a 404 Not Found status
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    // If the deletion is successful, return a 200 OK status with a success message
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    // Catching any errors that occur during the process and sending a 500 Internal Server Error status with an error message
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Exporting the router for use in other parts of the application
export default router;
