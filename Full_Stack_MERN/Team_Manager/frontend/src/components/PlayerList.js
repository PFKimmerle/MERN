import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/players')
            .then(response => response.json())
            .then(data => {
                const sortedPlayers = data.sort((a, b) => a.name.localeCompare(b.name));
            setPlayers(sortedPlayers);
    })
    .catch(error => console.error('Error:', error));
    }, []);

    const deletePlayer = (id) => {
        if (window.confirm('Are you sure you want to delete this player?')) {
            fetch(`http://localhost:1337/api/players/${id}`, { method: 'DELETE' })
                .then(() => setPlayers(players.filter(player => player._id !== id)))
                .catch(error => console.error('Error:', error));
        }
    };

    return (
        <div className="player-list-container">
            <h1>
                <Link to="/players/list">Manage Players</Link> | 
                <Link to="/gamestatus/1">Manage Player Status</Link>
            </h1>
            <div>
                <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link>
            </div>
            <table>
                <thead>
                    <tr className="header-row">
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player._id} className={index % 2 === 0 ? 'light-row' : 'dark-row'}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition || 'Not Specified'}</td>
                            <td>
                            <button onClick={() => deletePlayer(player._id)} className="delete">
                                    Delete
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;
