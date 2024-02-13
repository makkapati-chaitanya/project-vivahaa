// Import the HTTP module
const http = require('http');

// Define the port number
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response to the client
    res.end('Hello, World!\n');
});

// The server listens on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
