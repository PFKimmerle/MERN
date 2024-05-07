import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/PlayerList';
import GameStatus from './components/GameStatus'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/players/addplayer" element={<AddPlayer />} />
                <Route path="/players/list" element={<PlayerList />} />
                
                <Route path="/gamestatus/:gameNumber" element={<GameStatus />} /> 
                <Route path="/" element={<PlayerList />} />
            </Routes>
        </Router>
    );
}

export default App;
