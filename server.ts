import cors from 'cors'
import express from 'express';

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});