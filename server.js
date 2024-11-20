import express from 'express';
import bodyParser from 'body-parser';
import open from 'open';
import path from 'path';
import { fileURLToPath } from 'url'; // Required to handle __dirname in ES modules

const app = express();
const PORT = 3000;

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files (CSS)

// Routes
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/signup.html')); // Use path.join for compatibility
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log(`User signed up: ${name}, ${email}`);
    res.redirect('/login'); // Redirect to login page after signup
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html')); // Use path.join for compatibility
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`User logged in: ${email}`);
    res.sendFile(path.join(__dirname, '/views/loggedIn.html')); // Use path.join for compatibility
});

// Start the server
app.listen(PORT, async () => {
    const url = `http://localhost:${PORT}/signup`;
    console.log(`Server running at ${url}`);
    await open(url); // Automatically open the URL in the browser
});
