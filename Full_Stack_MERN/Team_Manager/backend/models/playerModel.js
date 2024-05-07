const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    preferredPosition: { type: String },
    status: {
        game1: { type: String, enum: ['Playing', 'Not Playing', 'Undecided'], default: 'Undecided' },
        game2: { type: String, enum: ['Playing', 'Not Playing', 'Undecided'], default: 'Undecided' },
        game3: { type: String, enum: ['Playing', 'Not Playing', 'Undecided'], default: 'Undecided' },
    }
});

module.exports = mongoose.model('Player', playerSchema);
