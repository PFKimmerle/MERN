import React, { useState } from 'react';
import './App.css'; 

const Tabs = ({ tabsData }) => {
const [activeIndex, setActiveIndex] = useState(0);

const selectTab = (index) => {
    setActiveIndex(index);
    // Call the optional callback function
    if (tabsData[index].callback) {
    tabsData[index].callback();
    }
};

return (
    <div>
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
};

export default Tabs;
