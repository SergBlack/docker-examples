import express from 'express';

const PORT = 3010;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from server!!!');
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
