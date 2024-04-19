
import React from 'react';
import './App.css'; // Importing the CSS file for styling

// Defining the App component
function App() {
  // Returning JSX to render the UI
  return (
    <div className="App">
      <header className="App-header">
        {/* Main heading */}
        <h1>Hello World!</h1>
        {/* Subheading for the to-do list */}
        <h2>Things I need to do:</h2>
        {/* Unordered list of to-dos */}
        <ul>
          <li>Learn React</li>
          <li>Watch Adventure Time</li>
          <li>Water the garden</li>
          <li>Feed the fish</li>
        </ul>
      </header>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
