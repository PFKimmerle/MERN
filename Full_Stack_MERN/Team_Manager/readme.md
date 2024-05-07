# Team Manager

## Overview

Team Manager is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides a platform for managing a team of players. It allows users to add new players, delete existing players, and view the game status of each player.

## Detailed Description

The application consists of several key features:

- **Player List**: This page displays a list of all players currently in the team. Each player's name, preferred position, and current status for three games are shown. Users can delete a player from the team on this page.

- **Add Player**: This page allows users to add a new player to the team. Users can input the player's name and preferred position.

- **Game Status**: These pages (one for each game) allow view a player's status for a specific game. 

The application uses a MongoDB database to store player data, Express.js and Node.js for the backend server, and React.js for the frontend user interface. The backend API is structured according to REST principles and communicates with the frontend via HTTP requests.

The application's user interface is styled with CSS for a clean and modern look. The design is responsive and works well on both desktop and mobile devices.

## Usage Instructions

Before running the application, make sure you have installed all the necessary dependencies. If you haven't done so, refer to the **Installation Guide** section.

To start the application, follow these steps:

1. Open a terminal in the project's root directory.
2. Run the command `npm start`. This will start the server and the client concurrently. The server runs on port 1337 and the client runs on port 3000.
3. Open a web browser and navigate to `http://localhost:3000/` to view and interact with the application.

The application has several pages:

- **Player List**: Visit `http://localhost:3000/players/list` to view the list of players. Here, you can delete players from the list.
- **Add Player**: Visit `http://localhost:3000/players/addplayer` to add a new player. Enter the player's name and preferred position, then click the "Add" button.
- **Game Status**: Visit `http://localhost:3000/gamestatus/1`, `http://localhost:3000/gamestatus/2`, or `http://localhost:3000/gamestatus/3` to view the game status of players. 

Remember to stop the server and client when you're done by pressing `Ctrl+C` in the terminal.

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html): Comprehensive guide on how to use React.js, the library used for building the user interface of this application.
- [Express.js Documentation](https://expressjs.com/): Guide and API reference for Express.js, the server framework used in this application.
- [MongoDB Documentation](https://docs.mongodb.com/): Documentation for MongoDB, the database used in this application.
- [Node.js Documentation](https://nodejs.org/en/docs/): Documentation for Node.js, the runtime environment used to run JavaScript on the server side.
- [MERN Stack Tutorial](https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack): A tutorial on how to get started with the MERN stack.

## License Information

This project is licensed under the MIT License. 