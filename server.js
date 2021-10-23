import express from 'express';
import {main} from './index.js';

const app = express();

const PORT = 5000;

// console.log(main);

app.get('/', async (req, res) => {
    let result = await main();
    res.send(result);
    res.send('logged in ');
});

app.listen(PORT, () => {
    console.log('listening on ', PORT);
});