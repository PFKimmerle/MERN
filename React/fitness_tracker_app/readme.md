# Fitness Tracker App

## Overview
The Fitness Tracker App is a web application designed to help individuals monitor and track their fitness activities such as running, biking, and swimming. Users can set goals, track progress, and start new tracking periods.

## Detailed Descriptions
### `App.js`
**Functionality**: Serves as the root component that renders the fitness tracker dashboard.
**Components**:
- `FitnessCard`: Represents an individual fitness activity.
- `PersonCard`: Displays the name of the individual tracking their fitness.

### `FitnessCard.jsx`
**Functionality**: Manages and displays the progress for a single fitness activity.
**Parameters**:
- `activity`: The type of fitness activity (e.g., Running, Biking, Swimming).
- `goalMiles`: The goal in miles that the user aims to achieve.

### `PersonCard.jsx`
**Functionality**: Displays the person's name and renders their fitness cards.
**Parameters**:
- `firstName`: The first name of the person.
- `lastName`: The last name of the person.

## Usage Instructions
To use the Fitness Tracker App, follow these steps:
1. Clone the repository: `git clone https://github.com/PFKimmerle/MERN.git'
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Installation Guide
Set up the Fitness Tracker App by:
1. Ensuring Node.js and npm are installed on your machine.
2. Following the usage instructions above to install and run the app.

## Resources
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## License Information
The Fitness Tracker App is released under the MIT License. For more details, see the LICENSE file in the repository.
