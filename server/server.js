const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

const clientPath = path.join(__dirname, '../client');

app.use('/src', express.static(path.join(clientPath, 'src')));

app.get('/dashboard', (req, res) => {
  const file = path.join(clientPath, 'src', 'Front-end', 'userdashboard.html');
  res.sendFile(file);
});

//app.listen(5000, () => {console.log("Server started on port 5000")})
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

app.route("/")