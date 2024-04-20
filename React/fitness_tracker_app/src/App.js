
import React from 'react';
import './App.css'; // Importing the main CSS file for styling
import FitnessCard from './FitnessCard'; // Importing the FitnessCard component

// Main App component which serves as the root of the fitness tracker application
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Tracker Dashboard</h1> {/* Title for the dashboard */}
      </header>
      <main>
        {/* Profile section for Jane Doe including fitness activity cards */}
        <h2 className="profile-name">Jane Doe</h2>
        <div className="profile-row">
          <FitnessCard activity="Running" />
          <FitnessCard activity="Biking" />
          <FitnessCard activity="Swimming" />
        </div>
        <hr className="profile-divider" /> {/* Visual divider between profiles */}
        
        {/* Profile section for John Smith including fitness activity cards */}
        <h2 className="profile-name">John Smith</h2>
        <div className="profile-row">
          <FitnessCard activity="Running" />
          <FitnessCard activity="Biking" />
          <FitnessCard activity="Swimming" />
        </div>
      </main>
    </div>
  );
}

export default App; // Exporting the App component to be used in index.js
