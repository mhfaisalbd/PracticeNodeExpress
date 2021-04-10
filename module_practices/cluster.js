const cluster = require('cluster');
const http = require('http');

const cpuCount = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) =>{
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const app = require('./app');
    app();
}