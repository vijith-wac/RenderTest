// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample static user data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to fetch user data
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
