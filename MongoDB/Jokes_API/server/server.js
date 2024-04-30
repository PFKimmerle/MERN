const express = require('express');
const app = express();
require('./config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jokeRoutes = require('./routes/jokes.routes');
app.use('/api/jokes', jokeRoutes);
const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));