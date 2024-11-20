const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files (CSS)

// Routes
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log(`User signed up: ${name}, ${email}`);
    res.redirect('/login'); // Redirect to login page after signup
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`User logged in: ${email}`);
    // res.send('Login successful!'); // Handle login logic
    res.sendFile(__dirname + '/views/loggedIn.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/signup`);
});


