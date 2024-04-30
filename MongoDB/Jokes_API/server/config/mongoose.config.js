const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
