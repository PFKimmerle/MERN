
# React Pokémon Fetcher

## Overview
The React Pokémon Fetcher is a web application designed to allow users to fetch and display a list of all 807 Pokémon names. It features a straightforward user interface with a single button that, when clicked, triggers an API call to retrieve the Pokémon data, which is then displayed alphabetically in a list.

## Detailed Descriptions
### `App.js`
**Functionality**: Manages the application's state and UI interactions, including fetching Pokémon data and displaying it in a sorted list.
- **Method**: `fetchPokemon` fetches data from the Pokémon API, sorts it alphabetically, and updates the state with this sorted list.

### `App.css`
**Purpose**: Provides styling for the application. It includes styles for the fetch button, Pokémon list, and individual Pokémon items within the list.

### `index.js`
**Functionality**: The entry point of the React application that renders the `App` component to the DOM.

### `index.css`
**Functionality**: Defines the global styles for the entire application, including font and margin resets.

## Usage Instructions
To set up and run the React Pokémon Fetcher, follow these steps:
1. **Clone the repository**:
   git clone https://github.com/PFKimmerle/MERN/tree/main/React/react_pokemon
2. **Navigate to the `react_pokemon` directory**:
   cd react_pokemon
3. **Install required dependencies**:
   npm install
4. **Start the application**:
   npm start

## Resources
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Pokémon API Documentation](https://pokeapi.co/docs/v2)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## License Information
The React Pokémon Fetcher is open-source software licensed under the MIT License. For more details, refer to the LICENSE file in the repository.
