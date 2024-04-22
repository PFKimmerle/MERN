import React from 'react';
import SubContents from './SubContents';
import Advertisement from './Advertisement'; // Import the Advertisement component

function Main() {
    return (
        <div className="main">
            <div className="subcontent-container">
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
            <Advertisement /> {/* Render the Advertisement component */}
        </div>
    );
}

export default Main;
