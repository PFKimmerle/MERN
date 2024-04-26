import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

// A single Display component that conditionally renders numbers, words, and styled words.
const Display = () => {
  const { word, textColor, backgroundColor } = useParams();
  const isNumber = !isNaN(word);
  
  // Apply text and background color if they exist, otherwise default styles are applied
  const displayStyle = {
    color: textColor || 'inherit',
    backgroundColor: backgroundColor || 'inherit',
    textAlign: 'center',
    padding: '20px',
    margin: '20px'
  };

  return (
    <div style={displayStyle}>
      <h2>{isNumber ? `The number is: ${word}` : `The word is: ${word}`}</h2>
    </div>
  );
};

// The Home component for the welcome page.
const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Welcome</h2>
  </div>
);

// The main App component with routing.
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Display />} />
        <Route path="/:word/:textColor/:backgroundColor" element={<Display />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
