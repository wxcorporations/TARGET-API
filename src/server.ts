import cors from 'cors'
import express from 'express';
import { PORT_EXPRESS } from './config/constants';
// import { config as swaggerConfig } from './src/config/swagger'

const app = express();

app.use(cors())
app.use(express.json())
// app.use(swaggerConfig)

// app.use('/api', )

app.get('/', (req, res) => {
    console.log(req)
  res.send('Hello World!');
});

app.listen(PORT_EXPRESS, () => {
  console.log('Server running on port: ', PORT_EXPRESS);
});