import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddPlayer() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [game1, setGame1] = useState("undecided");
    const [game2, setGame2] = useState("undecided");
    const [game3, setGame3] = useState("undecided");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length > 1) {
            fetch('http://localhost:1337/api/players', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name, preferredPosition: position, game1, game2, game3 })
            })
            .then(response => response.json())
            .then(() => window.location.href = '/players/list')
            .catch(error => console.error('Error:', error));
        }
    };

    return (
        <div style={{
            color: 'black',
            backgroundColor: 'white',
            padding: '20px',
            margin: '20px',
            border: '2px solid grey'
        }}>
            <h1>
                <Link to="/players/list">Manage Players</Link> | 
                <Link to="/gamestatus/1">Manage Player Status</Link>
            </h1>
            <div style={{ marginBottom: '20px' }}>
                <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={2} />
                </label>
                <label style={{marginLeft: '20px'}}>
                    Preferred Position:
                    <input type="text" value={position} onChange={e => setPosition(e.target.value)} />
                </label>
                <label style={{marginLeft: '20px'}}>
                    Game 1 Status:
                    <select value={game1} onChange={e => setGame1(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="not-playing">Not Playing</option>
                        <option value="undecided">Undecided</option>
                    </select>
                </label>
                <label style={{marginLeft: '20px'}}>
                    Game 2 Status:
                    <select value={game2} onChange={e => setGame2(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="not-playing">Not Playing</option>
                        <option value="undecided">Undecided</option>
                    </select>
                </label>
                <label style={{marginLeft: '20px'}}>
                    Game 3 Status:
                    <select value={game3} onChange={e => setGame3(e.target.value)}>
                        <option value="playing">Playing</option>
                        <option value="not-playing">Not Playing</option>
                        <option value="undecided">Undecided</option>
                    </select>
                </label>
                <button style={{ marginLeft: '20px' }} className="playing">Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayer;