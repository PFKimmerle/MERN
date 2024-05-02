const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connection established"))
.catch(error => console.log("MongoDB connection failed:", error.message));

// Routes
app.use('/api/products', require('./routes/productRoutes'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
