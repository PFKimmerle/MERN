require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');
const cors = require('cors');
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// API routes
app.use('/api/players', playerRoutes);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// The "catchall" handler: for any request that doesn't match the ones above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// Server start
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
