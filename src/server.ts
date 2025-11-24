import cors from 'cors'
import express from 'express';
import { PORT_EXPRESS } from './config/constants';
import swagger from './config/swagger';

const app = express();

app.use(cors())
app.use(express.json())
app.use(swagger.route, swagger.serve, swagger.setup)


app.get('/', (req, res) => {
    console.log(req)
  res.send('Hello World!');
});


app.listen(PORT_EXPRESS, () => {
  console.log('Servidor online: ', PORT_EXPRESS);
});