import express from 'express';
import {main, reloadPage} from './index.js';
import fs from 'fs';
import shell from 'shelljs';
import schedule from 'node-schedule';

const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
    // res.send(`Main server is running on .....${PORT}`,)

    res.send(`<button onclick='window.location.href="http://localhost:5001/stop"'>Stop</button> <button onclick='window.location.href="http://localhost:5001/start"'>Start</button>`);
})

app.get('/stop', async (req, res) => {
    res.send(`App server is being shutdown.. <button onclick='window.location.href="http://localhost:5001/start"'>Start</button>`)
    shell.exec('forever stop server.js');
})

app.get('/start', async (req, res) => {
    // shell.exec('node server.js');
    res.send(`App server is being started.. <button onclick='window.location.href="http://localhost:5001/stop"'>Stop</button>`)
    shell.exec('forever start server.js');
})

app.listen(PORT, () => {
    console.log('listening on ', PORT);
    console.log('run...');
});