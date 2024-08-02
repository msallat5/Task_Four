const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Import the cors package
const app = express();

// MySQL configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password. Default is empty in XAMPP.
    database: 'speech_to_text'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// API endpoint to save the text
app.post('/saveText', (req, res) => {
    const { text } = req.body;
    const query = 'INSERT INTO transcripts (text) VALUES (?)';
    db.query(query, [text], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ id: result.insertId });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});