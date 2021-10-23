import express from 'express';
import {main} from './index.js';
import fs from 'fs';


const app = express();

const PORT = 5000;

// console.log(main);

app.get('/', async (req, res) => {
    let result = await main();
    await res.send(result);
    // await res.send('logged in ');


/*     await fs.writeFile('./myfile.txt', 'Content to write', { flag: 'w' }, function(err) {
        if (err) 
            return console.error(err); 
        fs.readFile('./myfile.txt', 'utf-8', function (err, data) {
            if (err)
                return console.error(err);
            console.log(data);
        });
    });
 */

    const content = 'Some content!'
    
    fs.writeFile('test1.txt', JSON.stringify(result), err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    


/*     const content = 'Some content!'

    try {
      const data = fs.writeFileSync('D:/Workspace/Projects/test1/test1.txt', content)
      //file written successfully
    } catch (err) {
      console.error(err)
    }
     */

});

app.listen(PORT, () => {
    console.log('listening on ', PORT);
});