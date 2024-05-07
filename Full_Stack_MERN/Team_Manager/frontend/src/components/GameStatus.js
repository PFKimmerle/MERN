import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

function GameStatus() {
    const [players, setPlayers] = useState([]);
    const { gameNumber } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1337/api/players/status/game${gameNumber}`)
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error:', error));
    }, [gameNumber]);

    return (
        <div className="player-list-container">
            <h1>
                <Link to="/players/list">Manage Players</Link> | 
                <Link to="/gamestatus/1">Manage Player Status</Link>
            </h1>
            <div>
                <Link to="/gamestatus/1">Game 1</Link> | 
                <Link to="/gamestatus/2">Game 2</Link> | 
                <Link to="/gamestatus/3">Game 3</Link>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th>Player Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player._id} className="table-row">
                            <td className="table-cell">{player.name}</td>
                            <td className="table-cell">
                            <button className={`status-button ${player.status.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {player.status}
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GameStatus;