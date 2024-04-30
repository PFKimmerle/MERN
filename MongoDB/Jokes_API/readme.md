# Jokes API Project

## Overview
The Jokes API project is a web-based application that serves random jokes from a MongoDB database via a RESTful API. Designed to offer a fun and interactive way for users to discover and enjoy jokes, this API can be easily integrated into other applications or used standalone for entertainment purposes.

In this document, you will find detailed setup instructions, component descriptions, and resources for troubleshooting and extending your understanding of the project.

## Technology Stack
- **Node.js**: Handles server-side logic and serves API requests efficiently.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a set of robust features for web and mobile applications.
- **MongoDB**: Chosen for its flexibility and performance in handling simple data structures like jokes in a NoSQL format.
- **Mongoose**: An ODM (Object Data Modeling) tool for MongoDB and Node.js, used to model your application data.


## Detailed Descriptions
### `create_jokes_db.py`
**Functionality**: This Python script initializes and populates the MongoDB database with jokes.
**Usage**: Execute this script to prepare the jokes database.

### `jokes_db.py`
**Functionality**: Provides utility functions for interacting with the MongoDB database, such as fetching a random joke.
**Usage**: This script is used by the server to retrieve jokes from the database.

### `mongoose.config.js`
**Functionality**: Configures the MongoDB connection using Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js.
**Parameters**:
- `db_url`: MongoDB connection string. This should be set in an environment variable or directly in the script for development purposes.

### `jokes.controller.js`
**Functionality**: Contains the logic to handle API requests, fetching random jokes from the database and returning them to the client.
**Methods**:
- `getRandomJoke()`: Fetches a random joke from the database.

### `jokes.model.js`
**Functionality**: Defines the schema for a joke in the MongoDB database using Mongoose.
**Schema Attributes**:
- `setup`: The setup text for the joke.
- `punchline`: The punchline of the joke.

### `jokes.routes.js`
**Functionality**: Handles routing for the Jokes API, defining endpoints for various operations related to jokes.
**Endpoints**:
- `/api/jokes/random`: Endpoint to fetch a random joke.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- MongoDB
- Python (for initial database setup)

## Usage Instructions
Follow these steps to set up and run the Jokes API:
1. Clone the repository from GitHub to your local machine using: git clone https://github.com/PFKimmerle/MERN/tree/main/MongoDB/Jokes_API
2. Navigate to the cloned directory and install the necessary Node.js dependencies: npm install
3. Set up your MongoDB connection string in `mongoose.config.js`. Ensure MongoDB is running on your machine or use an external MongoDB service.
4. Run the `create_jokes_db.py` script to populate your MongoDB database: python script/create_jokes_db.py
5. Start the server: node server/server.js
6. Access the API through `http://localhost:8000/api/jokes/random` to fetch a random joke.

## Error Handling and Troubleshooting
Encountering issues is a normal part of setting up and running software. Here are solutions to some common problems:
- **Database Connection Issues**: Confirm that MongoDB is active and running, and that the `db_url` in `mongoose.config.js` matches your MongoDB configuration. For troubleshooting connections, refer to the [MongoDB connection issues guide](https://docs.mongodb.com/manual/troubleshooting/).
- **Dependency Errors**: If `npm install` does not resolve dependency issues, check that you are using a compatible version of Node.js (as specified in `package.json`). You may also need to clear the npm cache with `npm cache clean --force`.


## Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)

## License Information
This project is released under the MIT License. For more details, see the LICENSE file in the repository.




