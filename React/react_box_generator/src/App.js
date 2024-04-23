
import React, { useState } from 'react';
import Box from './Box';

const App = () => {
const [color, setColor] = useState('');
const [size, setSize] = useState('');
const [boxes, setBoxes] = useState([]);

const addBox = (event) => {
    event.preventDefault();
    setBoxes([...boxes, { color, size: parseInt(size, 10) || undefined }]);
    setColor('');
    setSize('');
};

return (
    <div>
    <form onSubmit={addBox}>
        <label>
        Color
        <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
        </label>
        <label>
        Size
        <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
        />
        </label>
        <button type="submit">Add</button>
    </form>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
        <Box key={index} color={box.color} size={box.size} />
        ))}
    </div>
    </div>
);
};

export default App;
