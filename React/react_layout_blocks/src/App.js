import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content-container">
                <Navigation />
                <Main />
            </div>
        </div>
    );
}

export default App;
