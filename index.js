const http = require('http');
const fs = require('fs');
const port = 4444;

const server = http.createServer((req, res) => {
    //console.log( req.method+ " - "+ req.url);

    switch (true) {
        case req.url === '/' && req.method === 'GET':
            fs.readFile ('./view/index.html', (err, data) => {
                res.setHeader('content-type', 'text/html');
                res.writeHeader(200);
                res.end(data);
                
            });
            break;
        
            case req.url === '/fish.css' && req.method === 'GET':
            fs.readFile ('./view/fish.css', (err, data) => {
                res.setHeader('content-type', 'text/css');
                res.writeHeader(200);
                res.end(data);
                
            });
            break;

        case req.url === "/halak" && req.method === "GET":
            fs.readFile ('./data/halak.json', (err, data) => {
                res.setHeader('Content-Type', 'application/json');
                res.writeHeader(200);
                res.end(data);
            })
            break;

        case req.url === "/halak.js" && req.method === "GET":
            fs.readFile ('./public/halak.js', (err, data) => {
                res.setHeader('Content-Type', 'application/javascript');
                res.writeHeader(200);
                res.end(data);
            })
            break;

        default:
            res.setHeader('Content-Type', 'text/html; charset=UTF8');
            res.writeHeader(404);
            res.end("A kért oldal nem található, majd lesz HTML file is hozzá");
    }
});

server.listen(port);