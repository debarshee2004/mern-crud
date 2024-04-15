# Backend CRUD Operations

Welcome to the Backend of our MERN Stack CRUD Operations Project! This section of the project focuses on explaining how CRUD operations are implemented using Express.js, Mongoose, and MongoDB, and how data flows through the system.

**1. Overview:**

The backend of our project is built using Node.js and Express.js, which provides a robust framework for building web servers and APIs. We use Mongoose, an object modeling tool for MongoDB, to simplify interactions with the MongoDB database.

**2. CRUD Operations:**

We implement CRUD operations (Create, Read, Update, Delete) using Express.js routes and Mongoose models. Here's a brief overview of how each operation is handled:

- **Create (POST):**

  - When a client sends a POST request to create a new resource, it hits the corresponding route in our Express.js application.
  - The route handler extracts the data from the request body and uses Mongoose to create a new document in the MongoDB database.
  - Example:
    ```javascript
    // Route to handle creating a new resource
    router.post("/resources", async (req, res) => {
      try {
        const newResource = await Resource.create(req.body);
        res.status(201).json(newResource);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    ```

- **Read (GET):**

  - When a client sends a GET request to fetch existing resources, it hits the corresponding route in our Express.js application.
  - The route handler uses Mongoose to query the MongoDB database for the requested data and sends it back to the client.
  - Example:
    ```javascript
    // Route to handle fetching all resources
    router.get("/resources", async (req, res) => {
      try {
        const resources = await Resource.find();
        res.json(resources);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    ```

- **Update (PUT/PATCH):**

  - When a client sends a PUT or PATCH request to update an existing resource, it hits the corresponding route in our Express.js application.
  - The route handler uses Mongoose to find the resource by ID, updates its fields based on the request body, and saves the changes to the MongoDB database.
  - Example:
    ```javascript
    // Route to handle updating an existing resource
    router.put("/resources/:id", async (req, res) => {
      try {
        const updatedResource = await Resource.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.json(updatedResource);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    ```

- **Delete (DELETE):**
  - When a client sends a DELETE request to remove an existing resource, it hits the corresponding route in our Express.js application.
  - The route handler uses Mongoose to find the resource by ID and deletes it from the MongoDB database.
  - Example:
    ```javascript
    // Route to handle deleting an existing resource
    router.delete("/resources/:id", async (req, res) => {
      try {
        await Resource.findByIdAndDelete(req.params.id);
        res.json({ message: "Resource deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    ```

**3. Express Mongoose & MongoDB Interaction:**

- **Express.js**: Express.js is a web application framework for Node.js that provides features for building APIs and web servers. We use Express.js to define routes and handle HTTP requests/responses.

- **Mongoose**: Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and simplifies interactions with MongoDB by providing methods for CRUD operations.

- **MongoDB**: MongoDB is a NoSQL database that stores data in JSON-like documents. Mongoose facilitates communication between our Express.js application and MongoDB by translating JavaScript objects into MongoDB documents and vice versa.

**4. Data Flow in CRUD Operations:**

- **Create**: Client sends data via HTTP POST request -> Express.js route handler extracts data -> Mongoose creates a new document in MongoDB.

- **Read**: Client sends HTTP GET request -> Express.js route handler queries MongoDB using Mongoose -> Sends data back to client.

- **Update**: Client sends data via HTTP PUT/PATCH request -> Express.js route handler updates document in MongoDB using Mongoose -> Sends updated data back to client.

- **Delete**: Client sends HTTP DELETE request -> Express.js route handler deletes document from MongoDB using Mongoose -> Sends confirmation message back to client.

That's a brief overview of how CRUD operations are implemented in our backend using Express.js, Mongoose, and MongoDB. If you have any questions or need further clarification, feel free to reach out! 🚀
