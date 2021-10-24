import express from 'express';
import {main, reloadPage} from './index.js';
import fs from 'fs';
import shell from 'shelljs';
import schedule from 'node-schedule';

const app = express();
const PORT = 5000;

app.get('/fetch', async (req, res) => {
    let result = await main();;
    // await res.send(result);

    schedule.scheduleJob('1 * * * *', async () => {
        console.log('after 1 min..');
        result = await main();
    })

    let html = result.map((elem) => {
        return `<li>${elem.hrefText}</li>`;
    });


    res.send(`<button onclick='window.location.reload()'>Fetch Data</button> <br/><br/> <ul>${html}</ul>`);

    
    fs.writeFile('test1.txt', JSON.stringify(result), err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })


});

app.get('/stop', async () => {
    process.exit(1);
})

app.get('/start', async () => {
    shell.exec('node server.js');
})

app.listen(PORT, () => {
    console.log('listening on ', PORT);
    console.log('run...');
});