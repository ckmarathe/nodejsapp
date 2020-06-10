const http = require('http');

// Read the host address and the port from the environment
const hostname = '0.0.0.0';
const port = 3000;
const dbuser = process.env.DBUSER;

// Return JSON regardless of HTTP method or route our web app is reached by
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello ${dbuser} !"}`);
});

// Start a TCP server listening for connections on the given port and host
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
