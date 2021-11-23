const http = require('http');
const fs = require('fs');
const port = 4444;

const server = http.createServer((req, res) => {
    console.log( req.method+ " - "+ req.url);

    switch (true) {
        case req.url === "/" && req.method === "GET":
            fs.readFile = ('./view/index.html', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
                
            });
            break;

        case req.url === "halak" && req.method === "GET":
            fs.readFile = ('./data/halak.json', (err, data) => {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(data);
            })
            break;

        case req.url === "/halak.js" && req.method === "GET":
            fs.readFile = ('./public/halak.js', (err, data) => {
                res.setHeader('Content-Type', 'application/javascript');
                res.writeHead(200);
                res.end(data);
            })
            break;

        default:
            res.setHeader('Content-Type', 'text/html; charset=UTF8');
            res.writeHead(404);
            res.end("A kért oldal nem található, majd lesz HTML file is hozzá");
    }
});

server.listen(port);