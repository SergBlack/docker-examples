import express from 'express';
import fs from 'fs';

const PORT = 3010;
const DIR_PATH = './data';
const FILE_PATH = `${DIR_PATH}/count.txt`;

const app = express();
let visitCount = 0;

try {
  if (fs.existsSync(FILE_PATH)) {
    fs.readFile(FILE_PATH, (err, data) => {
      if (err) {
        console.error(err);
        visitCount = 0;
      }

      visitCount = Number(data.toString('utf8'));
    })
  } else {
    fs.mkdir(DIR_PATH, (err) => {
      if (err) {
        console.log(err);
      }
    })
  }
} catch (e) {
  console.error(e);
}

app.get('/', async (req, res) => {
  visitCount += 1;

  await fs.writeFile(FILE_PATH, String(visitCount), (err) => {
    if (err) {
      console.log(err);
    }
  })

  res.send(`Hello from server! This page has been visited ${visitCount} times`);
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
