import React, { useState } from 'react';
import './App.css';

// Define the tabs data including label, content, and a callback function for each tab
const tabsData = [
    {
        label: 'Tab 1: Structure',
        content: `Welcome to our Tabs Component! This tab explains the structure. We have a div with an id of "tabs" which contains individual tab elements, and another div with an id of "content" where the content for each tab is displayed. JavaScript is used to dynamically update the content based on the active tab.`,
        callback: () => console.log("Structure tab clicked")
    },
    {
        label: 'Tab 2: State Management',
        content: `Let's dive into the React state! Each tab is associated with a state property, "activeIndex", which determines which tab's content is currently visible. When you click a tab, we update this state, and React re-renders the component to display the corresponding content.`,
        callback: () => console.log("State Management tab clicked")
    },
    {
        label: 'Tab 3: Styling & CSS',
        content: `Styling is crucial for a great user experience. The tabs are styled using CSS for a neat and responsive layout. We use flexbox to align the tabs and animation to provide a smooth transition when switching between tabs.`,
        callback: () => console.log("Styling & CSS tab clicked")
    },
];

// The App component which renders the tabs and the content area
function App() {
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active tab

// Function to handle tab selection
const selectTab = (index) => {
    setActiveIndex(index); // Update the active tab index
    tabsData[index].callback && tabsData[index].callback(); // Run callback if present
};

// Render the tabs and the content area with dynamic content based on the active tab
return (
    <div className="App">
    <div id="tabs">
        {tabsData.map((tab, index) => (
        <div
            key={index}
            className={`tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => selectTab(index)}
        >
            {tab.label}
        </div>
        ))}
    </div>
    <div id="content" className="fade-in">
        {tabsData[activeIndex].content}
    </div>
    </div>
);
}

export default App;
