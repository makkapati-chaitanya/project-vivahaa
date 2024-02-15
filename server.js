const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'userdashboard.html'));
});

// Route for the SignIn page
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'SignInpage.html'));
});

// Route for the SignUp page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'SignUppage.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
