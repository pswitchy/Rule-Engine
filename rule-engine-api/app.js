// rule-engine-api/app.js
const express = require('express');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/rules');
const cors = require('cors');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/rules/', ruleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Default route (for handling unspecified routes)
app.get('/', (req, res) => {
    res.send('Welcome to the Rule Engine API');
});
