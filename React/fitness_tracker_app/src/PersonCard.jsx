
import React from 'react';
import './PersonCard.css'; // Importing the corresponding CSS

// Component representing the card with a person's name
function PersonCard({ firstName, lastName }) {
  return (
    <div className="person-section">
      <h2 className="person-name">{firstName} {lastName}</h2> {/* Render the person's full name */}
      {/* More content like FitnessCard components could be added here if necessary */}
    </div>
  );
}

export default PersonCard; // Export PersonCard component for use in other parts of the app
