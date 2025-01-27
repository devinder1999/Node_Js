const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Test</title>
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a simple HTML snippet served by Node.js.</p>
        </body>
        </html>
    `);
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
