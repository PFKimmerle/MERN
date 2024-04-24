// Importing necessary React hooks and CSS for styling
import React, { useState } from 'react';
import './App.css';

// Main App component
function App() {
  // State hook to store the list of Pokemon
    const [pokemon, setPokemon] = useState([]);

  // Asynchronous function to fetch the Pokemon data
    const fetchPokemon = async () => {
    // Fetching data from the Pokemon API with a limit of 807
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
    const data = await response.json();
    // Sorting the Pokemon names in alphabetical order
    const sortedPokemon = data.results.sort((a, b) => a.name.localeCompare(b.name));
    // Updating the state with the sorted Pokemon data
    setPokemon(sortedPokemon);
};

  // Render the button and the list of Pokemon names
return (
    <div>
      {/* Button to trigger the fetching of Pokemon */}
    <button className="button" onClick={fetchPokemon}>Fetch Pokemon</button>
      {/* List to display the Pokemon names */}
    <ul className="pokemon-list">
        {pokemon.map(p => (
          // List item for each Pokemon name
        <li key={p.name} className="pokemon-item">{p.name}</li>
        ))}
    </ul>
    </div>
);
}

// Exporting the App component for use in other parts of the application
export default App;
