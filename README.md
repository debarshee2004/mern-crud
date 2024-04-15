# MERN CRUD

## What is CRUD?

CRUD stands for Create, Read, Update, and Delete. It's a set of basic operations that are fundamental to most database-driven applications. Here's a breakdown of each operation:

1. **Create**: This operation involves creating new records or entries in the database. For example, when a user fills out a form on a website to register, the data they submit is used to create a new user record in the database.

2. **Read**: This operation involves retrieving or reading existing records from the database. For example, when a user visits a webpage to view their profile information, the application retrieves their user record from the database and displays it on the page.

3. **Update**: This operation involves modifying existing records in the database. For example, when a user edits their profile information and submits the changes, the application updates their user record in the database with the new information.

4. **Delete**: This operation involves removing existing records from the database. For example, when a user decides to delete their account, the application removes their user record from the database.

## CRUD using MERN Stack?

Now, let's discuss how to use the MERN stack (MongoDB, Express.js, React, Node.js) for performing CRUD operations:

1. **MongoDB**: MongoDB is a NoSQL database that is commonly used with the MERN stack. It stores data in JSON-like documents, making it flexible and scalable. To perform CRUD operations with MongoDB, you would use its query language and methods to create, read, update, and delete documents in your collections.

2. **Express.js**: Express.js is a backend web application framework for Node.js. It provides a set of features for building web applications and APIs, including routing, middleware support, and HTTP utility methods. You would use Express.js to handle HTTP requests from your frontend application (built with React) and define routes for handling CRUD operations.

3. **React**: React is a JavaScript library for building user interfaces. It allows you to create reusable UI components that update efficiently in response to data changes. In a MERN stack application, you would use React to build the frontend interface that interacts with the user and displays data retrieved from the backend.

4. **Node.js**: Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It's commonly used for building server-side applications, including web servers. In a MERN stack application, you would use Node.js to run your backend server, handle incoming HTTP requests, and interact with the database (MongoDB) to perform CRUD operations.

Here's a high-level overview of how you would use the MERN stack for CRUD operations:

1. **Create**:

   - Frontend (React): Create a form component to collect user input.
   - Backend (Express.js): Define a route to handle POST requests and insert new data into the database.

2. **Read**:

   - Frontend (React): Fetch data from the backend using HTTP requests.
   - Backend (Express.js): Define routes to handle GET requests and retrieve data from the database.

3. **Update**:

   - Frontend (React): Create an edit form component to allow users to modify existing data.
   - Backend (Express.js): Define routes to handle PUT or PATCH requests and update data in the database.

4. **Delete**:
   - Frontend (React): Implement a delete button or functionality to allow users to delete data.
   - Backend (Express.js): Define routes to handle DELETE requests and remove data from the database.

## Project Setup.

**MERN Stack CRUD Operations Project**

Welcome to the MERN Stack CRUD Operations Project! This project provides a boilerplate setup for building a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js) to perform CRUD (Create, Read, Update, Delete) operations.

**Prerequisites:**

- Node.js and npm installed on your machine
- MongoDB installed and running locally or accessible remotely

**Setup Instructions:**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/debarshee2004/mern_crud.git
   cd mern_crud
   ```

2. **Install Dependencies:**

   - Backend (Express.js):
     ```bash
     cd backend
     npm install
     ```
   - Frontend (React):
     ```bash
     cd frontend
     npm install
     ```

3. **Configure MongoDB:**

   - Ensure that MongoDB is installed and running locally on the default port (5555) or configure the connection URL in `backend/config.js`.

4. **Start the Development Servers:**

   - Backend (Express.js):

     ```bash
     cd backend
     npm run dev
     ```

     The backend server will start running on http://localhost:5555.

   - Frontend (React):
     ```bash
     cd frontend
     npm run dev
     ```
     The frontend development server will start running on http://localhost:3000.

5. **Access the Application:**

   - Open your web browser and navigate to http://localhost:3000 to access the frontend of the application.

6. **Explore CRUD Operations:**
   - The frontend interface provides options to Create, Read, Update, and Delete data.
   - Follow the application's UI to perform CRUD operations and interact with the backend server.

**Additional Notes:**

- The backend server exposes RESTful APIs for handling CRUD operations. You can customize routes and controllers in the `backend/routes` and `backend/controllers` directories.
- The frontend application is built using React components. You can modify and extend the UI components in the `frontend/src/components` directory.
- Ensure that both the backend and frontend servers are running concurrently during development to enable seamless communication between the client and server.

**Deployment:**

- For deployment to production, you may need to configure environment variables, set up a production database, and deploy the application to a hosting service like Heroku or AWS.
- Refer to the respective documentation of your chosen hosting service for deployment instructions tailored to your setup.

That's it! You're now ready to start developing your MERN stack CRUD application. Happy coding! 🚀

Overall, the MERN stack provides a powerful and efficient way to build full-stack web applications with support for CRUD operations. Each component of the stack plays a specific role in enabling the development of robust and scalable applications.
