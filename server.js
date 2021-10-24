import express from 'express';
import {main} from './index.js';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.get('/fetch', async (req, res) => {
    let result = await main();;
    // await res.send(result);

    let html = result.map((elem) => {
        return `<li>${elem.hrefText}</li>`;
    });

    res.send(`<button onclick='window.location.reload()'>Fetch Data</button> <br/><br/> <ul>${html}</ul>`);
    fs.writeFile('data.file', JSON.stringify(result), err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
});

app.listen(PORT, () => {
    console.log('Server is listening on ', PORT);
});