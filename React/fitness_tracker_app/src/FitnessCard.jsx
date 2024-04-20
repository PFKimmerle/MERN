
import React, { useState } from 'react';
import './FitnessCard.css'; // Import the CSS for styling

// Component representing a single fitness card for an activity
function FitnessCard({ activity, goalMiles = 10 }) {
  const [distance, setDistance] = useState(0); // State to track distance

  // Function to increment the distance
  const handleIncrement = () => {
    setDistance(prevDistance => prevDistance + 1);
  };

  // Function to reset the distance tracker
  const resetTracker = () => {
    setDistance(0);
  };

  // Calculate the width of the progress bar fill based on goal miles
  const progressWidth = distance >= goalMiles ? 100 : (distance / goalMiles) * 100;
  // Calculate any extra miles over the goal
  const extraMiles = distance > goalMiles ? distance - goalMiles : 0;

  // Render the fitness card with activity details and controls
  return (
    <div className='fitness-card'>
      <h2>{activity}</h2> {/* Display the activity type */}
      <div className='progress-bar'>
        <div
          className='progress-bar-fill'
          style={{ width: `${progressWidth}%` }} // Set width based on progress
        />
      </div>
      <p>Goal: {goalMiles} miles</p> {/* Display the goal miles */}
      {extraMiles > 0 && <p>Extra Miles: {extraMiles}</p>} {/* Show extra miles if any */}
      <p>Total Distance: {distance} miles</p> {/* Show total distance */}
      <button onClick={handleIncrement}>Add Mile</button> {/* Button to add a mile */}
      <button onClick={resetTracker}>Start New Period</button> {/* Button to reset tracker */}
    </div>
  );
}

export default FitnessCard; // Exporting FitnessCard component
