const http = require('http');

function startServer() {
    const server = http.createServer((req, res)=>{
        res.writeHead(200);
        res.end('Beautiful Bangladesh!');
    
    });

    server.listen(3300);
    
}

if (module.children) {
    startServer();
}
else{
    module.exports = startServer;
}